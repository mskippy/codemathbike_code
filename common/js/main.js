/**
 * main.js — sitewide (non-navigation) behaviors
 * Safe to use alongside nav_system.js
 * Last updated: 2025-10-25
 */

(() => {
  const VERSION = "main.js v2025-10-25";
  const on = (evt, cb) => window.CMBUtils?.on ? CMBUtils.on(evt, cb) : window.addEventListener(evt, cb);
  const once = (evt, cb) => {
    const wrap = (...args) => { off(); cb(...args); };
    const off = window.CMBUtils?.on
      ? CMBUtils.on(evt, wrap) && (() => CMBUtils.off(evt, wrap))
      : (window.addEventListener(evt, wrap), () => window.removeEventListener(evt, wrap));
  };
  const throttle = (fn, wait=150) => {
    let t = 0, lastArgs = null, running = false;
    const run = () => {
      running = true;
      fn.apply(null, lastArgs);
      setTimeout(() => { running = false; if (t) { t=0; run(); } }, wait);
    };
    return (...args) => { lastArgs = args; if (!running) run(); else t = 1; };
  };

  /** Utilities */
  function isExternalLink(a) {
    try {
      const url = new URL(a.href, location.href);
      return url.origin !== location.origin;
    } catch { return false; }
  }

  function enhanceExternalLinks(root = document) {
    root.querySelectorAll('a[href]').forEach(a => {
      if (isExternalLink(a) && !a.hasAttribute('target')) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  function enableSmoothAnchors(root = document) {
    root.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, "", `#${id}`);
    });
  }

  function stickyHeaderShadow() {
    const scrolled = (window.scrollY || document.documentElement.scrollTop) > 4;
    document.body.classList.toggle('scrolled', !!scrolled);
  }

  function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    const onScroll = throttle(() => {
      const show = (window.scrollY || document.documentElement.scrollTop) > 300;
      btn.classList.toggle('show', show);
    }, 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function wireToggles(root = document) {
    // Generic open/close toggles: any element with [data-toggle="#selector"]
    root.addEventListener('click', (e) => {
      const t = e.target.closest('[data-toggle]');
      if (!t) return;
      const sel = t.getAttribute('data-toggle');
      if (!sel) return;
      const target = document.querySelector(sel);
      if (!target) return;
      e.preventDefault();
      target.classList.toggle('open');
      t.classList.toggle('active');
    });
  }

  function copyButtonsForCode(root = document) {
    // Adds a small "Copy" button to <pre><code> blocks (no styling enforced here)
    root.querySelectorAll('pre > code').forEach(code => {
      const pre = code.parentElement;
      if (pre.dataset.copyBound) return;
      pre.dataset.copyBound = "1";
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn-copy';
      btn.textContent = 'Copy';
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.innerText);
          const old = btn.textContent; btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = old, 1200);
        } catch {
          // no-op
        }
      });
      pre.style.position = pre.style.position || 'relative';
      btn.style.position = 'absolute';
      btn.style.top = '8px';
      btn.style.right = '8px';
      pre.appendChild(btn);
    });
  }

  /** Initialize once DOM and partials are ready (but never touches nav/title) */
  function initEnhancements() {
    // Guard against double-run
    if (window.__MAIN_INIT__) return;
    window.__MAIN_INIT__ = true;

    enhanceExternalLinks();
    enableSmoothAnchors();
    setupBackToTop();
    wireToggles();
    copyButtonsForCode();

    // Sticky header shadow
    const onScroll = throttle(stickyHeaderShadow, 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // If partials load later, re-apply enhancements to the injected fragments
    if (window.CMBUtils?.on) {
      CMBUtils.on('partials:loaded', (detail) => {
        const root = (detail && detail.root) || document;
        enhanceExternalLinks(root);
        copyButtonsForCode(root);
      });
    }
  }

  /** Boot sequence:
   *  - Wait for DOMContentLoaded
   *  - If you use partial injection, also wait for that event (but we won't block forever)
   */
  function boot() {
    // If your partial injector fires, run after; else run now.
    let ran = false;
    const go = () => { if (!ran) { ran = true; initEnhancements(); } };

    // Prefer your partials event if available
    if (window.CMBUtils?.on) {
      CMBUtils.on('partials:loaded', go);
      // Fallback timer in case there are no partials on this page
      setTimeout(go, 800);
    } else {
      go();
    }
  }

  document.addEventListener('DOMContentLoaded', boot);

  // Helpful version marker in console (once)
  if (!window.__MAIN_LOGGED__) {
    window.__MAIN_LOGGED__ = true;
    try { console.info(`%c${VERSION}`, 'color: #22a; font-weight:600'); } catch {}
  }

// ========= THEME + HEADER driven by nav_systems.js =========
function applyThemeFromCourse(courseKey) {
  const b = document.body;
  if (!b) return;
  // remove any old course classes (both schemes)
  b.className = b.className
    .replace(/\btheme-(ict8|ict9|dc1011)\b/g, "")
    .replace(/\b(ict8|ict9|dc1011)\b/g, "")
    .trim();
  if (courseKey) {
    b.classList.add("theme-" + courseKey); // preferred
    b.classList.add(courseKey);            // compatibility with older CSS (body.ict8, etc.)
  }
}

function ensureHeaderH1() {
  const header = document.querySelector("header");
  if (!header) return null;
  let h = header.querySelector("#page-title, h1");
  if (!h) {
    h = document.createElement("h1");
    h.id = "page-title";
    header.appendChild(h);
  }
  return h;
}

function setHeaderTitleFromMatch(match, courseKey) {
  const h = ensureHeaderH1();
  if (!h || !match || !match.title) return;
  h.textContent = match.title;
  document.title = `${match.title} • ${(courseKey || "Course").toUpperCase()}`;
}

function applyContext(ctx) {
  if (!ctx) return;
  const courseKey = ctx.courseKey;
  // Treat the context itself as the "match" (it already has title, href, etc.)
  const match = ctx.match || ctx;

  applyThemeFromCourse(courseKey);
  setHeaderTitleFromMatch(match, courseKey);
}


// 1) When nav_systems announces context
document.addEventListener("nav:context", (e) => {
  applyContext(e.detail || window.NAV_CONTEXT || null);
});


// 2) If header/footer partials load later, update title then too
if (window.CMBUtils?.on) {
  CMBUtils.on("partials:loaded", () => {
    applyContext(window.NAV_CONTEXT || null);
  });
}

document.addEventListener('partials:loaded', () => {
  document.querySelectorAll('#site-footer [data-year]')
    .forEach(el => (el.textContent = new Date().getFullYear()));
});

})();
