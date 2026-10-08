# ajaywanekar — personal website

Personal portfolio site for Ajay Wanekar, built with Next.js + Tailwind CSS and exported as a static site for GitHub Pages.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts) — experience, projects, publications, skills, the "Now" section and social links. Components only render that data.

The resume served by the "Resume" button is `public/ajay-wanekar-resume.pdf`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000 with hot reload
npm run build    # static site written to out/
```

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` to GitHub Pages.
