/* codemathbike v2 — utils.js (non-module) */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function on(type, fn, target = document) {
  target.addEventListener(type, fn, { once: true });
}

/* Strip trailing /index.html and trailing slash for consistent matching */
function normalizePath(pathname = window.location.pathname) {
  let p = pathname.replace(/\/index\.html?$/i, "");
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

/* Expect /{course}/{unit?}/{page?} */
function parseLocation() {
  const parts = normalizePath().split("/").filter(Boolean);
  const ix = parts.indexOf("code_v2");
  const course = parts[ix + 1] || null;     // ict8 | ict9 | dc1011
  const unit   = parts[ix + 2] || null;     // unit1..unit4
  const page   = parts[ix + 3] || null;     // lesson1, topic1, ...
  return { course, unit, page, parts };
}

/* Sort keys like unit1..unit4 / lesson1..lessonN */
function sortedKeys(obj = {}) {
  return Object.keys(obj).sort((a, b) => {
    const na = parseInt(a.match(/\d+/)?.[0] || "0", 10);
    const nb = parseInt(b.match(/\d+/)?.[0] || "0", 10);
    if (isNaN(na) || isNaN(nb)) return a.localeCompare(b);
    return na - nb;
  });
}

/* expose to global (since we’re not using type="module") */
window.CMBUtils = { $, $$, on, normalizePath, parseLocation, sortedKeys };
