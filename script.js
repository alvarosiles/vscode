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
      "footer.by": "by",
      "nav.license": "License",

      "home.meta.title": "Alvaro Siles — Visual Studio Code Extensions",
      "home.meta.description": "Visual Studio Code extensions built by Alvaro Siles: themes, snippets, tools and AI assistance to improve your workflow.",
      "hero.eyebrow": "Independent developer",
      "hero.subtitle": "Visual Studio Code extensions built with care",
      "hero.desc": "I build productivity tools for developers: themes, snippets, utilities, and AI assistance that plug directly into your editor. No accounts, no trackers, no hassle.",
      "hero.cta.projects": "View projects",

      "projects.title": "Extensions for your editor",
      "projects.desc": "Five independent tools, each focused on solving one concrete problem.",
      "projects.preview": "Preview",

      "proj.themes.desc": "A carefully crafted color theme collection, designed for long coding sessions without visual fatigue.",
      "proj.themes.f1": "High-contrast light and dark palettes",
      "proj.themes.f2": "Syntax highlighting tuned for 20+ languages",
      "proj.themes.f3": "Matching file icons",

      "proj.ai.desc": "AI assistance built into your editor to explain, refactor, and document code without leaving your workflow.",
      "proj.ai.f1": "In-context code suggestions",
      "proj.ai.f2": "Function explanation and refactoring",
      "proj.ai.f3": "Configurable with your own provider",

      "proj.tools.desc": "A set of everyday utilities: quick formatting, navigation shortcuts, and commands for repetitive tasks.",
      "proj.tools.f1": "Productivity commands in the command palette",
      "proj.tools.f2": "Navigation shortcuts between files",
      "proj.tools.f3": "Automation for repetitive tasks",

      "proj.snippets.desc": "Curated snippets for the most used languages and frameworks, so you write less and build faster.",
      "proj.snippets.f1": "Coverage for JS/TS, React, Python and more",
      "proj.snippets.f2": "Consistent naming conventions",
      "proj.snippets.f3": "Easy to extend with your own snippets",

      "proj.pack.desc": "All the extensions above bundled into a single install, with recommended starter settings.",
      "proj.pack.f1": "Install the whole ecosystem in one step",
      "proj.pack.f2": "Recommended settings included",
      "proj.pack.f3": "Centralized updates",

      "btn.install": "Install extension",

      "features.title": "Why use these extensions",
      "feature1.title": "Easy to use",
      "feature1.desc": "Install and start working right away. No complex setup, no mandatory accounts.",
      "feature2.title": "Fast and lightweight",
      "feature2.desc": "Built to avoid slowing down your editor, even in large projects.",
      "feature3.title": "Privacy first",
      "feature3.desc": "Everything runs locally whenever possible. No data collected without your knowledge.",

      "privacy.cta": "Read the full privacy policy",

      "about.eyebrow": "About the developer",
      "about.title": "Created by <a href=\"https://alvarosiles.cloud\" target=\"_blank\" rel=\"noopener\">Alvaro Siles</a>",
      "about.desc": "Developer creating productivity extensions and tools. I build software for developers, focused on simplicity, performance, and respect for user privacy.",

      "license.meta.title": "License — Alvaro Siles",
      "license.meta.description": "MIT license for Alvaro Siles' open source projects.",
      "license.title": "License",
      "license.desc": "All the code for these projects is released under the MIT license: free to use, copy, modify, and distribute, commercially or not.",
      "license.viewGithub": "View on GitHub"
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
