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

## Update content

Edit [`src/data/content.ts`](src/data/content.ts) to update experience, projects, skills, and contact details.

## Assets

- Resume: [`public/resume.pdf`](public/resume.pdf)
- Project previews: [`public/projects/`](public/projects/)

Replace the SVG previews with PNG screenshots anytime without changing component code.
