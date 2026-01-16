/* ============================================================
   inject_partials.js — codemathbike v2
   Version 2.0 layout – established Oct 2025
   Loads header, sidebar, right rail, and footer from partials
   ============================================================ */

/* inject_partials.js — emits 'partials:loaded' when done */
document.addEventListener("DOMContentLoaded", async () => {
    const parts = document.querySelectorAll("[data-partial]");
    for (const el of parts) {
      const url = el.dataset.partial;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status} – ${url}`);
        el.innerHTML = await res.text();
      } catch (err) {
        console.warn("❌ Failed to load partial:", url, err);
        // leave any inline placeholders in place if fetch failed
      }
    }
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  });
  