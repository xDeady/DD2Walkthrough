<div align="center">

# 🐉 Dragon's Dogma 2 — Full Walkthrough

**A static single-page guide for Dragon's Dogma 2 — every quest, every branch, every timer, zero missables.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-success?style=flat-square)](#-tech-stack)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Русский](https://img.shields.io/badge/lang-Русский-red?style=flat-square)](README.ru.md)

</div>

---

## 📖 About

A complete, no-miss walkthrough for **Dragon's Dogma 2** — from awakening in the mine to the Unmoored World and NG+. Built as a single static HTML file with no build step, no frameworks, and no backend.

> 🎯 Goal: **you never miss a single line of content.**

---

## ✨ Features

| | Feature |
|---|---|
| 📜 | **Full act-by-act walkthrough** — from the mine to NG+ |
| 🗺️ | **Every quest in order** — 24 main + 60 side quests with locations, conditions, and rewards |
| ⏳ | **Timer warnings** — quests with hidden deadlines |
| ⚠️ | **Points of no return** — moments after which content is lost forever |
| 🔀 | **All branching paths** — every choice and its consequences |
| 💜 | **Romance routes** — Ulrika and Wilhelmina |
| 🎭 | **Vocation unlocks** — where master skills and classes become available |
| 🧩 | **10 Sphinx riddles** — with answers and the Unmaking Arrow warning |
| ✅ | **Interactive 100% checklist** — progress saved in browser `localStorage` |
| 📱 | **Responsive UI** — sidebar with scroll-spy, mobile menu, dark fantasy theme |

---

## 🛠 Tech Stack

A pure static site — **no build step, no dependencies, no backend.**

- **HTML5** — semantic markup, inline SVG illustrations
- **CSS3** — custom properties, Grid/Flexbox, `position: sticky`, responsive media queries
- **Vanilla JavaScript** — checklists, progress bar, `localStorage`, `IntersectionObserver` (scroll-spy + reveal animations)
- **Google Fonts** — Cormorant SC, Cormorant Garamond, EB Garamond

---

## 🚀 Getting Started

### Run locally

Just open the file in your browser:

```bash
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows

### Publishing (GitHub Pages)

The repository must be public. Then:

1. **Settings → Pages → Source**: pick the `main` branch and the `/ (root)` folder, save.
2. In 1–2 minutes the site will be live at:

```
https://<username>.github.io/<repo>/
```

3. Add the link to the repository **About** section and to the README header (badge or a "Live" line).

The site is fully static — no build step, no backend; Pages serves the files as they are.

---

## 🌐 Localization

The guide is translated into 9 languages: **English, Русский, Deutsch, Français, Español, Português (BR), 日本語, 简体中文, 한국어**. The switcher sits in the sidebar above the progress bar: the site auto-detects the browser language on first visit and remembers the choice in `localStorage`. Checklist progress is shared across languages.

### How it works

- The English text lives in `index.html`; every text node carries a `data-i18n` key;
- translations live in `i18n/*.json` (ru, de, fr, es, pt-BR, ja, zh-CN, ko) and are loaded via `fetch`;
- on startup `app.js` loads `en.json` first (fallback), then the selected language, and rewrites every `[data-i18n]` node;
- the checklist at the bottom of the page rebuilds itself in the current language on the fly.

### Adding a language

1. Create `i18n/xx.json` (copy `en.json` and translate the values; don't touch the keys);
2. add one line to `LANGS` in `app.js`:

```javascript
{ code:'xx', label:'Language name' }
```

That's it. You can verify dictionary completeness by diffing the key set against `en.json`.

### Note about file://

Don't open `index.html` by double-clicking (`file://`) — browsers block `fetch` there, so the dictionaries won't load. Serve the folder locally instead:

```bash
python -m http.server        # http://localhost:8000
# or
npx serve
```
