````md
# 💖 Bagas & Anita

A simple memories website built with **HTML, CSS, and Vanilla JavaScript**.

> "Every picture tells a story, and every story deserves a place to stay." ✨

---

## 🌸 About

This website is a small personal project created to preserve memories and special moments.

Built with:

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

---

## ✨ Features

- 🔐 Password Screen
- 💌 Love Letters
- 🎵 Music Player
- 📝 Notes
- 📷 Dynamic Pinterest-style Gallery
- 🔍 Gallery Filter
  - ✨ All
  - 🤍 Bagas
  - 🌷 Anita
- ⚡ Lazy Loading Images
- 📱 Responsive Design
- 🚀 GitHub Pages Deployment

---

## 📂 Project Structure

```txt
.
├── css
│   ├── base
│   ├── layout
│   ├── components
│   ├── animations.css
│   ├── responsive.css
│   └── main.css
│
├── img
│   ├── bagas
│   └── anita
│
├── js
│   ├── app.js
│   └── modules
│       ├── gallery.js
│       ├── gallery-data.js
│       ├── generate-gallery.js
│       └── ...
│
├── index.html
├── package.json
└── README.md
```

---

# 📸 Updating Gallery

Adding new memories is simple.

## 1. Put images into folders

```txt
img
├── bagas
│     photo1.jpg
│     photo2.png
│
└── anita
      photo1.jpg
      photo2.webp
```

Supported formats:

- .jpg
- .jpeg
- .png
- .webp

---

## 2. Generate gallery data

Run:

```bash
npm run gallery
```

This command automatically scans all images and updates:

```txt
js/modules/gallery-data.js
```

No need to manually edit arrays.

---

## 3. Commit changes

```bash
git add .
git commit -m "Add new memories"
git push
```

---

## 4. Wait for GitHub Pages

After pushing, GitHub Pages will automatically update the website.

---

# 🚀 Development

Install dependencies:

```bash
npm install
```

Run gallery generator:

```bash
npm run gallery
```

---

# ❤️ Workflow

```txt
Add photos
      ↓
npm run gallery
      ↓
git add .
      ↓
git commit
      ↓
git push
      ↓
GitHub Pages
      ↓
Memories updated ✨
```

---

## 🌷 Notes

This project is intentionally kept simple.

Everything is managed directly from the source code and deployed through GitHub Pages.

No database.

No backend.

Just memories. 💖

---

Made with ❤️ by Bagas.
````
