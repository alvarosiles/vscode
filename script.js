// =========================================================
// Álvaro Siles — Landing page interactions
// Theme toggle, mobile nav, scroll reveal, footer year.
// =========================================================

(function () {
  "use strict";

  const root = document.documentElement;
  const THEME_KEY = "site-theme";

  /* ---------- Theme (dark by default) ---------- */
  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "light" ? "light" : "dark");

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isLight = root.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Language (Spanish by default) ---------- */
  const LANG_KEY = "site-lang";

  const translations = {
    en: {
      "meta.title": "Privacy Policy — Alvaro Siles",
      "meta.description": "Privacy policy for the Visual Studio Code extensions built by Alvaro Siles.",
      "nav.projects": "Projects",
      "nav.features": "Features",
      "nav.privacy": "Privacy",
      "nav.about": "About",
      "policy.eyebrow": "Legal",
      "policy.title": "Privacy Policy",
      "policy.updated": "Last updated: July 31, 2026",
      "summary.eyebrow": "Summary",
      "summary.title": "The essentials, in short",
      "summary.desc": "A simple commitment, no fine print.",
      "summary.item1": "We don't collect personal data.",
      "summary.item2": "We don't use third-party trackers or analytics.",
      "summary.item3": "We don't send information to external servers.",
      "summary.item4": "Everything runs locally whenever possible.",
      "collect.title": "What information we collect",
      "collect.p1": "None of our extensions collect personally identifiable data. We don't require sign-ups, accounts, or contact information to install or use any of our tools.",
      "collect.p2": "Official stores (Visual Studio Marketplace) may collect aggregated, anonymous install metrics under their own policies, outside of our control.",
      "storage.title": "Local storage",
      "storage.p1": "This website stores your theme (light/dark) and language preference using the browser's localStorage. This information stays on your device only and is never transmitted to any server.",
      "storage.p2": "Some extensions may save user settings (e.g. formatting preferences) directly in your local Visual Studio Code configuration. That data never leaves your machine because of anything we do.",
      "third.title": "Third-party services",
      "third.p1": "<strong>Pro AI Assistant</strong> is the only extension that can communicate with external services, and only if you explicitly configure it with an AI provider of your choice. In that case, your code or queries are sent directly from your editor to that provider, subject to the provider's own privacy policy. We do not operate intermediary servers or store those requests.",
      "third.p2": "All other extensions (Themes, Tools, Snippets, Dev Pack) make no network connections at all.",
      "analytics.title": "Analytics and trackers",
      "analytics.p1": "Neither this website nor our extensions use tracking cookies, pixels, third-party analytics, or advertising tools.",
      "hosting.title": "Hosting",
      "hosting.p1": "This site is hosted on GitHub Pages. GitHub may collect standard technical server logs (such as IP addresses) under its own privacy policy, outside of our control.",
      "changes.title": "Changes to this policy",
      "changes.p1": "If this policy changes, the \"last updated\" date at the top of this page will be revised accordingly. We recommend checking back periodically.",
      "contact.title": "Contact",
      "contact.p1": "Questions about this policy? Reach out via GitHub or visit my website.",
      "footer.made": "Created with",
      "footer.by": "by Alvaro Siles"
    }
  };

  const langButtons = document.querySelectorAll(".lang-btn");
  const i18nEls = document.querySelectorAll("[data-i18n]");

  if (langButtons.length && i18nEls.length) {
    // Capture the Spanish source text/markup straight from the page
    // so Spanish never has to be duplicated inside the dictionary above.
    const esSource = {};
    i18nEls.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      esSource[key] = el.tagName === "META" ? el.getAttribute("content") : el.innerHTML;
    });

    function applyLanguage(lang) {
      const dict = lang === "en" ? translations.en : null;

      i18nEls.forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        const value = dict && dict[key] ? dict[key] : esSource[key];

        if (el.tagName === "META") {
          el.setAttribute("content", value);
        } else {
          el.innerHTML = value;
        }
      });

      root.lang = lang;
      langButtons.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
      });
    }

    const savedLang = localStorage.getItem(LANG_KEY);
    applyLanguage(savedLang === "en" ? "en" : "es");

    langButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
        localStorage.setItem(LANG_KEY, lang);
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
