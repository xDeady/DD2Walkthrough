<div align="center">

# 🐉 Dragon's Dogma 2 — Полное прохождение

**Статический одностраничный гайд по Dragon's Dogma 2 — все квесты, все развилки, все таймеры, ноль пропусков.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Без зависимостей](https://img.shields.io/badge/зависимости-нет-success?style=flat-square)](#-технологии)
[![Лицензия: MIT](https://img.shields.io/badge/лицензия-MIT-blue?style=flat-square)](LICENSE)

[![English](https://img.shields.io/badge/lang-English-blue?style=flat-square)](README.md)
[![Русский](https://img.shields.io/badge/lang-Русский-red?style=flat-square)](README.ru.md)

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

---

## 🛠 Технологии

Чистый статический сайт — **без сборки, зависимостей и бэкенда.**

- **HTML5** — семантическая разметка, инлайн SVG-иллюстрации
- **CSS3** — кастомные свойства, Grid/Flexbox, `position: sticky`, адаптив через media queries
- **Vanilla JavaScript** — чек-листы, прогресс-бар, `localStorage`, `IntersectionObserver` (scroll-spy и reveal-анимации)
- **Google Fonts** — Cormorant SC, Cormorant Garamond, EB Garamond

---

## 🚀 Запуск

### Локально

Просто откройте файл в браузере:

```bash
open index.html      # macOS
xdg-open index.html  # Linux
start index.html     # Windows

### Публикация (GitHub Pages)

Репозиторий должен быть публичным. Затем:

1. **Settings → Pages → Source**: выберите ветку `main` и папку `/ (root)`, сохраните.
2. Через 1–2 минуты сайт будет доступен по адресу:

```
https://<username>.github.io/<repo>/
```

3. Добавьте ссылку в поле **About** репозитория и в шапку README (бейдж или строку «Живая версия»).

Сайт полностью статический — никаких сборок и бэкендов, Pages отдаёт файлы как есть.

---

## 🌐 Мультиязычность

Гайд переведён на 9 языков: **English, Русский, Deutsch, Français, Español, Português (BR), 日本語, 简体中文, 한국어**. Переключатель — в сайдбаре над прогресс-баром: сайт автоматически подхватывает язык браузера при первом визите, запоминает выбор в `localStorage`. Прогресс чек-листа работает независимо от языка.

### Как устроено

- Английский текст — в `index.html`, каждый текстовый узел помечен `data-i18n`-ключом;
- переводы лежат в `i18n/*.json` (ru, de, fr, es, pt-BR, ja, zh-CN, ko) и подгружаются через `fetch`;
- при загрузке `app.js` сначала читает `en.json` (фолбэк), затем словарь выбранного языка, и перезаписывает все `[data-i18n]`-узлы;
- чек-лист в конце страницы пересобирается под текущий язык на лету.

### Добавить язык

1. Создайте `i18n/xx.json` (скопируйте `en.json` и переведите значения; ключи не трогайте);
2. добавьте одну строку в `LANGS` в `app.js`:

```javascript
{ code:'xx', label:'Название языка' }
```

Всё. Проверить полноту словаря можно скриптом: сравнить набор ключей с `en.json`.

### Важно про file://

Открывать `index.html` двойным кликом (`file://`) нельзя — браузеры блокируют `fetch`, и словари не загрузятся. Локально запускайте любой статический сервер:

```bash
python -m http.server        # http://localhost:8000
# или
npx serve
```
