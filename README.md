# Yash Saini — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌗 Dark / Light mode toggle (default: dark)
- ⚡ Animated dot-grid hero with floating blobs and staggered text reveal
- 📊 Scroll-synced timeline line in Experience section
- 🖥️ Interactive terminal easter egg — press `/` or `Ctrl+K`
- ⬆️ Lime reading-progress bar at top of viewport
- 🟢 "Available for hire" status indicator in navbar
- 💻 Self-typing code block in About section
- ⚡ Animated count-up achievement stats on scroll
- 📱 Fully responsive and mobile-first
- ♿ Semantic HTML, ARIA labels, focus-visible states, high-contrast
- 🚀 Optimised for Lighthouse performance scores
- 🔍 SEO: meta tags, Open Graph, Twitter Card

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 15 (App Router)           |
| Language   | TypeScript                        |
| Styling    | Tailwind CSS v4                   |
| Animation  | Framer Motion                     |
| Fonts      | Space Grotesk · Inter · JetBrains Mono |
| Themes     | next-themes                       |
| Contact    | Formspree                         |
| Deployment | Vercel                            |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Updating Content

All content (name, bio, skills, projects, experience, etc.) lives in a **single file**:

```
src/data/portfolio.ts
```

Edit that file and the entire site updates automatically — no need to touch any component code.

## 🔧 Setting Up the Contact Form

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID (e.g. `xaybzqkr`)
3. In `src/data/portfolio.ts`, replace:
   ```ts
   formspreeId: "YOUR_FORMSPREE_ID"
   ```
   with your actual ID.

## 📄 Adding Your Resume

Replace the placeholder file at `public/resume.pdf` with your actual resume PDF.

## 🚢 Deploying to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Push to GitHub and connect repo at vercel.com
```

## 🎮 Terminal Easter Egg

Press **`/`** or **`Ctrl+K`** anywhere on the page to open an interactive terminal.

Available commands: `whoami`, `skills`, `experience`, `projects`, `contact`, `open-to-work`, `clear`
