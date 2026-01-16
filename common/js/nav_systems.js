// nav_systems.js — safe, fail-open sidebar + breadcrumbs
(function () {
  const VERSION = "nav_systems.js v2025-10-26";
  const NAV = () => (window.NAV_DATA || {});

  // ---------- tiny helpers ----------
  const qs  = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  
  function norm(href) {
    if (!href) return "";

    // Remove any query string or hash
    href = href.split("#")[0].split("?")[0];

    // Strip trailing slashes
    href = href.replace(/\/+$/g, "");

    // If it ends with "/something.html" (ANY filename), drop that filename
    // e.g. "/code/ict8/unit2/lesson1/2.1_index.html" -> "/code/ict8/unit2/lesson1"
    //      "/code/ict8/unit2/index.html"            -> "/code/ict8/unit2"
    return href.replace(/\/[^/]*\.html?$/i, "");
  }

  
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null) continue;
      if (k === "class") node.className = v;
      else if (k === "dataset" && v && typeof v === "object") {
        Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
      } else if (k.startsWith("on") && typeof v === "function") {
        node.addEventListener(k.slice(2), v);
      } else {
        node.setAttribute(k, v);
      }
    }
    for (const c of children.flat()) {
      if (c == null) continue;
      node.append(c.nodeType ? c : String(c));
    }
    return node;
  }

  // ---------- figure out "where we are" ----------
  function bestMatch() {
    const data = NAV();
    const path = norm(location.pathname);
    let best = { courseKey:null, unitKey:null, pageKey:null, title:null, href:null, depth:-1 };

    const tryHref = (href, meta) => {
      const n = norm(href);
      if (n && path.startsWith(n) && n.length > best.depth) {
        best = { ...meta, href, depth: n.length };
      }
    };

    for (const [ck, course] of Object.entries(data)) {
      if (!course) continue;
      tryHref(course.href || "", { courseKey: ck, title: course.title || ck });

      const units = course.units || {};
      for (const [uk, unit] of Object.entries(units)) {
        tryHref(unit.href || "", { courseKey: ck, unitKey: uk, title: unit.title || uk });

        const pages = unit.pages || {};
        for (const [pk, page] of Object.entries(pages)) {
          tryHref(page.href || "", { courseKey: ck, unitKey: uk, pageKey: pk, title: page.title || pk });
        }
      }
    }
    // If nothing matched, pick the first course as a safe default
    if (!best.courseKey) {
      const firstCourseKey = Object.keys(data)[0];
      if (firstCourseKey) best.courseKey = firstCourseKey;
    }
    return best;
  }

  // ---------- render sidebar ----------
  function renderSidebar(courseKey) {
    const side = qs("#sidebar");
    if (!side) return;

    const data = NAV();
    const course = data[courseKey];
    if (!course) { side.innerHTML = ""; return; }

    const current = bestMatch();
    const frag = document.createDocumentFragment();
    side.innerHTML = "";

    const units = course.units || {};
    Object.entries(units).forEach(([ukey, unit]) => {
      const isOpen = current.courseKey === courseKey && current.unitKey === ukey;

      const wrap = el("div", { class: "unit" + (isOpen ? " is-open" : "") });

      // Unit header (keeps your link behavior; we use it as the toggle too)
      const unitLink = el("a", { class: "unit-link", href: unit.href || "#" }, unit.title || ukey);
      wrap.appendChild(unitLink);

      // Lessons/pages
      const list = el("ul", { class: "nav" });
      const pages = unit.pages || {};
      Object.entries(pages).forEach(([pkey, page]) => {
        const active = current.courseKey === courseKey && current.unitKey === ukey && current.pageKey === pkey;
        const li = el("li", {},
          el("a", { href: page.href || "#", class: active ? "active" : null }, page.title || pkey)
        );
        list.appendChild(li);
      });
      wrap.appendChild(list);
      frag.appendChild(wrap);
    });

    side.appendChild(frag);

    // Accordion behavior: click a unit title to toggle it (one open at a time)
    side.addEventListener("click", (e) => {
      const header = e.target.closest(".unit-link");
      if (!header) return;
      // If it's a unit link pointing to an index page, we intercept to toggle
      e.preventDefault();
      const clicked = header.closest(".unit");
      qsa(".unit", side).forEach(u => { if (u !== clicked) u.classList.remove("is-open"); });
      clicked.classList.toggle("is-open");
    }, { once: true });
  }

  // ---------- render breadcrumbs ----------
  function ensureBreadcrumbSlot() {
    // Reuse if it already exists
    let slot = document.querySelector("#breadcrumbs");
    if (slot) return slot;
  
    const header = document.querySelector("#site-header") || document.querySelector("header");
    if (!header) return null;
  
    // Create the slot
    slot = el("nav", { id: "breadcrumbs", class: "breadcrumbs", "aria-label": "Breadcrumbs" });
  
    // ⬇️ NEW: try to place RIGHT AFTER the site title
    const titleEl =
      document.querySelector("#site-header .site-title") ||
      document.querySelector("#site-header h1") ||
      document.querySelector("header .site-title") ||
      document.querySelector("header h1");
  
    if (titleEl && titleEl.parentElement === header) {
      titleEl.insertAdjacentElement("afterend", slot);
    } else if (titleEl) {
      // If the title is inside a left container, insert after it anyway
      titleEl.insertAdjacentElement("afterend", slot);
    } else {
      // Fallback: append to header (last resort)
      header.appendChild(slot);
    }
    return slot;
  }
  

  function renderBreadcrumbs(courseKey) {
    const slot = ensureBreadcrumbSlot();
    if (!slot) return;

    const data = NAV();
    const current = bestMatch();
    const course = data[courseKey];
    if (!course) { slot.textContent = ""; return; }

    const parts = [];
    parts.push({ label: course.title || courseKey, href: course.href || null });

    const unit = course.units?.[current.unitKey];
    if (unit) parts.push({ label: unit.title || current.unitKey, href: unit.href || null });

    //const page = unit?.pages?.[current.pageKey];
    //if (page) parts.push({ label: page.title || current.pageKey, href: page.href || null });

    // Build DOM
    slot.innerHTML = "";
    const frag = document.createDocumentFragment();
    parts.forEach((p, i) => {
      if (i) frag.appendChild(el("span", { class: "crumb-sep" }, "›"));
      if (p.href && i < parts.length - 1) {
        frag.appendChild(el("a", { href: p.href }, p.label));
      } else {
        frag.appendChild(el("span", { class: "crumb-current" }, p.label));
      }
    });
    slot.appendChild(frag);
  }

// ---------- wire up ----------
function init() {
  const current = bestMatch();
  const courseKey = current.courseKey || Object.keys(NAV())[0] || null;

  // Expose context (used by other scripts and our own fallbacks)
  window.NAV_CONTEXT = { ...current, courseKey, version: VERSION };

  // Fallback: set document title + header <h1> directly
  (function () {
    const navTitle = window.NAV_CONTEXT?.title;
    if (navTitle) {
      document.title = `${navTitle} | codemathbike`;
      const h1 = document.querySelector("#site-header .site-title, #site-header h1");
      if (h1) h1.textContent = navTitle;
    }
  })();

  // Tell other scripts (e.g., main.js) that nav context is ready
  document.dispatchEvent(new CustomEvent("nav:context", { detail: window.NAV_CONTEXT }));

  // Draw UI
  renderSidebar(courseKey);
  renderBreadcrumbs(courseKey);
}


  // Run on DOM ready
  document.addEventListener("DOMContentLoaded", init);

  // Retry after partials (if your injector broadcasts)
  if (window.CMBUtils && typeof window.CMBUtils.on === "function") {
    window.CMBUtils.on("partials:loaded", init);
  }

  // Last resort: watch for #sidebar or header to appear
  const mo = new MutationObserver(() => {
    if (qs("#sidebar") || qs("#site-header") || qs("header")) {
      init();
      mo.disconnect();
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });
})();
