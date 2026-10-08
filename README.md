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


---

## 🌐 Мультиязычность

Гайд переведён на 9 языков: English, Russian, Deutsch, Français, Español, Português (BR), 日本語, 简体中文, 한국ю. Переключатель — в сайдбаре; выбор и прогресс checklist хранятся в localStorage. Структура: английский текст в `index.html` + словари `i18n/*.json` (ключи `data-i18n`). Новый язык = один JSON + строка в `LANGS` в `app.js`.

**Important:** due to browser restrictions, opening `index.html` by double-clicking (file://) will not load the JSON. Run a local server:

```bash
python -m http.server
```

or host the folder on any static host (GitHub Pages etc.).
