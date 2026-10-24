# Ajay Wanekar: personal website

Personal portfolio of Ajay Wanekar (AI/ML, computer vision, VLMs, agentic AI), built with Next.js 16 and Tailwind CSS v4 and exported as a fully static site.

- **Live site:** https://ajaywanekar.github.io
- **Repository:** https://github.com/ajaywanekar/ajaywanekar.github.io (public)
- **Started / first published:** 8 October 2026
- **Original brief:** `../New Text Document.txt` (the first plan for the site: sections, interactive ideas, the "Ask Ajay's AI" idea). Content comes from `../Ajay Wanekar Resume.pdf`.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): headline details, the "Hey!" intro, the statement, focus areas, experience, projects (including each project's planet colours and paper links), publications, hackathons, skills and the "Now" section. The components only render that data, so most updates never touch component code.

- Empty `github` / `linkedin` values are hidden on the site.
- Photo: `public/ajay-wanekar.jpg` (a 4:5 crop of `../Photo_gs25mtech14301.jpeg`).
- Resume served by the "Resume" buttons: `public/ajay-wanekar-resume.pdf` (see [Resume](#resume) below).

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000 with hot reload
npm run build    # static site written to out/
npm run lint
```

**OneDrive note:** this folder is synced by OneDrive, and the dev server's file watcher sometimes misses edits (especially to `globals.css`). If a change doesn't show up, stop the server, delete `.next`, and run `npm run dev` again.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` to GitHub Pages (Pages source: GitHub Actions). A deploy takes about a minute.

GitHub access was removed from this computer when the project was closed on 8 October 2026, so pushing again needs a fresh login:

```bash
gh auth login --web --hostname github.com --git-protocol https
gh auth refresh --hostname github.com --scopes workflow   # only needed when changing files in .github/workflows
gh auth setup-git
git push
```

## Design

The look combines three references the site owner chose:

| Reference | What was taken from it |
| --- | --- |
| [aahana-surya.github.io](https://aahana-surya.github.io/) | The space visuals: 3D starfield you fly through while scrolling (with warp streaks), Earth on the hero horizon, fonts (Instrument Serif, Inter Tight, JetBrains Mono) |
| [majd-portfolio.framer.website](https://majd-portfolio.framer.website/) | The page layout: big hero, "Hey!" photo intro, scroll-reveal statement, expandable rows, project cards, dark footer with a giant name |
| [aashishjaini.me](https://www.aashishjaini.me/) | Only the "decode" text animation on section headings |

Where things live:

- Starfield: [`src/components/Starfield.tsx`](src/components/Starfield.tsx). `SCROLL_DEPTH` sets how fast you fly per pixel scrolled, `DRIFT` the idle speed.
- Earth, planets and most animation CSS: [`src/app/globals.css`](src/app/globals.css). The Earth textures are generated SVG noise; continents, clouds and city lights share one noise source so they stay aligned.
- Satellites and Starships: [`src/components/space.tsx`](src/components/space.tsx), with the fleet (heights, speeds, directions) in [`src/components/home/Hero.tsx`](src/components/home/Hero.tsx).
- Heading decode effect: [`src/components/ScrambleText.tsx`](src/components/ScrambleText.tsx).

## Style rules

These are the owner's standing preferences for the site:

- **No em dashes** anywhere in site text. Use commas, colons or brackets instead.
- **The statement** (the large sentence after the intro) is about 80% technical field and 20% management, e.g. ending with leading work "from plan to delivery".
- **All spacecraft stay the same size** as the original satellite (`w-10 sm:w-12`, 48×20 viewBox). The drifting satellites and Starships are a favourite feature; add to them, don't remove them.
- **Contact is email only.** No contact form.
- **Never publish the phone number.**

## Resume

The owner edits their resume as `Desktop/Job Applications/latest AI/Ajay_Wanekar_Resume.pdf` (latest update: 25 October 2026). The master copy for this site is `../Ajay Wanekar Resume.pdf`: that resume plus a clickable `ajaywanekar.github.io` link added to the header, left of the LinkedIn/GitHub icons (it includes the phone number and stays outside this repository). Older versions are kept beside it as backups.

The public copy in `public/` is the same resume with the phone number removed from the actual PDF text (not just covered). To regenerate it after updating the master:

```python
import re
import fitz  # PyMuPDF

doc = fitz.open("../Ajay Wanekar Resume.pdf")
page = doc[0]
# Redact anything that looks like a phone number (e.g. +91 followed by 10 digits).
for *box, word, _, _, _ in page.get_text("words"):
    if re.fullmatch(r"\+?\d{10,13}", word):
        page.add_redact_annot(fitz.Rect(box), fill=(1, 1, 1))
page.apply_redactions()
doc.save("public/ajay-wanekar-resume.pdf", garbage=4, deflate=True)
```

Afterwards, open the result and confirm the number is gone before publishing.

## Next steps

- **Custom domain:** the owner has a domain but hasn't named it yet. To connect it, add `public/CNAME` containing the domain, add the DNS records GitHub Pages lists, and set the domain in the repository's Pages settings (HTTPS is then automatic).
- **LightSpeak.ai:** waiting on a description before it can be added as a project.
- **AI and X Hackathon:** add a link if one becomes available (the Meta × Pragati card already links to its announcement).
- **Future idea:** an "Ask Ajay's AI" assistant at `/ai` that answers from the CV, projects and papers. GitHub Pages only serves static files, so this needs a separate serverless backend.
