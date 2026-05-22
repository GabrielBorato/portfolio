# Portfolio · Gabriel Borato

Minimalist tech portfolio built with **React + Vite + TypeScript + Tailwind CSS**, deployed to **GitHub Pages**.

🌐 **Live:** https://gabrielborato.github.io/portfolio/

## Stack

- ⚡ **Vite** + **React 19** + **TypeScript**
- 🎨 **Tailwind CSS v4** (CSS-first config)
- 🎬 **Framer Motion** for animations
- 🌍 **i18next** (PT / EN)
- 🌓 Dark / Light theme toggle
- ✉️ **EmailJS** contact form (with `mailto:` fallback)
- 🚀 Auto-deploy via **GitHub Actions** to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## EmailJS setup (optional)

1. Create an account at [emailjs.com](https://www.emailjs.com).
2. Create a Service and a Template (fields: `name`, `email`, `message`).
3. Copy `.env.example` to `.env.local` and fill in:

   ```env
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```

4. For production (GitHub Actions), add the same vars as **repository secrets** and expose them as build-time env in the workflow if needed.

If env vars are missing, the form opens the user's mail client via `mailto:`.

## Deploy

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`:

1. Push this folder to a repo named `portfolio` under your GitHub account.
2. In the repo **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main`. The site goes live at `https://<username>.github.io/portfolio/`.

> ℹ️ The `base` path is set to `/portfolio/` in `vite.config.ts`. If you fork to a different repo name, update it accordingly.

## Customize

- Profile data: [`src/data/profile.ts`](src/data/profile.ts)
- Copy / translations: [`src/i18n/locales`](src/i18n/locales)
- Theme tokens: [`src/index.css`](src/index.css) (`@theme` block)
