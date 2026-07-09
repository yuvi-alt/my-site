# Yuvraj Bhavsar — Portfolio

Professional software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

Live site: [https://yuvi-alt.github.io/my-site/](https://yuvi-alt.github.io/my-site/)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in development.

## Build

```bash
npm run build
```

Static output is generated in the `out/` folder.

## Deploy to GitHub Pages

1. Push this project to the `yuvi-alt/my-site` repository on the `main` branch.
2. In GitHub repo **Settings → Pages**, set **Source** to **Deploy from a branch**.
3. Choose branch **`gh-pages`** and folder **`/ (root)`**.
4. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `out/` folder to `gh-pages` on every push to `main`.

## Custom domain

Production builds use an empty base path so the site works at your own domain root (e.g. `https://yourdomain.com/`).

1. Buy a domain (Cloudflare, Namecheap, Google Domains, etc.).
2. In **Settings → Pages → Custom domain**, enter your domain (e.g. `www.yourdomain.com`) and click **Save**.
3. At your domain registrar, add DNS records:

**For `www.yourdomain.com` (recommended):**
```
CNAME   www   yuvi-alt.github.io
```

**For apex `yourdomain.com` (no www):**
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

4. Wait for DNS to propagate (up to 24 hours, often faster).
5. Enable **Enforce HTTPS** in GitHub Pages settings once DNS is verified.

Your portfolio will be live at your custom domain. The `yuvi-alt.github.io/my-site/` URL may not load assets correctly after this change — use the custom domain as your main link.

## Update content

Edit [`src/data/content.ts`](src/data/content.ts) to update experience, projects, skills, and contact details.

## Assets

- Resume: [`public/resume.pdf`](public/resume.pdf)
- Project previews: [`public/projects/`](public/projects/)

Replace the SVG previews with PNG screenshots anytime without changing component code.
