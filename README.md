# sahilmoza.com

Personal academic site of Sahil Moza. Jekyll 4 with a small custom theme; publications are
rendered from `_bibliography/papers.bib` by jekyll-scholar.

## Build locally

    bundle install
    LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 bundle exec jekyll serve

## Preview online before going live

    bin/preview

Builds with `_config_preview.yml` (subpath, noindex, no CNAME) and force-pushes the result to
`sahilm89/site-preview`, served at https://sahilm89.github.io/site-preview/.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages
(repository Settings → Pages → Source must be "GitHub Actions").

## Edit content

| What                | Where                                   |
|---------------------|-----------------------------------------|
| Home page text      | `_pages/index.md`                       |
| Research cards      | `_data/research.yml`, pages in `_research/` |
| Publications        | `_bibliography/papers.bib` (fields: `abbr`, `selected`, `preprint`, `equal`, `pdf`, `code`, `website`, `award`, `note`) |
| News                | `_data/news.yml`                        |
| Software, teaching  | `_data/software.yml`, `_data/teaching.yml` |
| CV                  | `_data/cv.yml` and `assets/pdf/SahilCV.pdf` |
