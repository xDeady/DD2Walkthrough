<div align="center">

# 🐉 Dragon's Dogma 2 — Полное прохождение

**Статический одностраничный гайд по Dragon's Dogma 2 — все квесты, все развилки, все таймеры, ноль пропусков.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Без зависимостей](https://img.shields.io/badge/зависимости-нет-success?style=flat-square)](#-технологии)
[![Лицензия: MIT](https://img.shields.io/badge/лицензия-MIT-blue?style=flat-square)](LICENSE)

[![Живая версия](https://img.shields.io/badge/живая_версия-открыть-brightgreen?style=flat-square&logo=github)](https://xdeady.github.io/DD2Walkthrough/)
[![Языки](https://img.shields.io/badge/языков-9-informational?style=flat-square)](#-мультиязычность)

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Русский](https://img.shields.io/badge/lang-Русский-red?style=flat-square)](README.ru.md)

### ▶ [**Открыть живой гайд →**](https://xdeady.github.io/DD2Walkthrough/)

</div>

---

## 📖 О проекте

Полное прохождение **Dragon's Dogma 2** без пропусков — от пробуждения в шахте до Неприкаянного мира и NG+. Один статический HTML-файл: без сборки, фреймворков и бэкенда.

> 🎯 Цель: **вы не пропустите ни строчки контента.**

---

## ✨ Возможности

| | Возможность |
|---|---|
| 📜 | **Полный walkthrough по актам** — от шахты до NG+ |
| 🗺️ | **Все квесты по порядку** — 24 основных + 60 побочных с локациями, условиями и наградами |
| ⏳ | **Метка «Таймер»** — квесты со скрытым дедлайном |
| ⚠️ | **Точки невозврата** — моменты, после которых контент теряется навсегда |
| 🔀 | **Все развилки** — каждый выбор и его последствия |
| 💜 | **Романтика** — ветки Ульрики и Вильгельмины |
| 🎭 | **Классы и мастера** — где открываются мастер-навыки и профессии |
| 🧩 | **10 загадок Сфинкса** — с ответами и предупреждением про Стрелу уничтожения |
| ✅ | **Интерактивный чек-лист 100%** — прогресс хранится в `localStorage` браузера |
| 📱 | **Адаптивный интерфейс** — сайдбар со scroll-spy, мобильное меню, тёмная фэнтези-тема |
| 🌐 | **9 языков** — English, Русский, Deutsch, Français, Español, Português (BR), 日本語, 简体中文, 한국어 |

---

## 🛠 Технологии

Чистый статический сайт — **без сборки, зависимостей и бэкенда.**

- **HTML5** — семантическая разметка, инлайн SVG-иллюстрации
- **CSS3** — кастомные свойства, Grid/Flexbox, `position: sticky`, адаптив через media queries
- **Vanilla JavaScript** — чек-листы, прогресс-бар, `localStorage`, `IntersectionObserver` (scroll-spy и reveal-анимации)
- **Google Fonts** — Cormorant SC, Cormorant Garamond, EB Garamond

---

## 🚀 Запуск

### Использовать живую версию

Просто откройте:

**https://xdeady.github.io/DD2Walkthrough/**

Ничего устанавливать не нужно — гайд работает в любом современном браузере и запоминает прогресс чек-листа и выбор языка локально.

### Запуск локально

Проект использует `fetch()` для загрузки словарей переводов, поэтому открытие `index.html` двойным кликом (`file://`) **не сработает** — браузеры блокируют `fetch` на файловом протоколе, и словари не загрузятся. Запустите статический сервер:

```bash
# Python 3 (встроенный)
python3 -m http.server 8000
# → http://localhost:8000

# Node.js
npx serve
# → http://localhost:3000

# PHP (встроенный)
php -S localhost:8000
