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
2. In GitHub repo settings, set **Pages** source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`.

## Update content

Edit [`src/data/content.ts`](src/data/content.ts) to update experience, projects, skills, and contact details.

## Assets

- Resume: [`public/resume.pdf`](public/resume.pdf)
- Project previews: [`public/projects/`](public/projects/)

Replace the SVG previews with PNG screenshots anytime without changing component code.
