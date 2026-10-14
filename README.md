# Zekun Li — academic homepage

A standalone static website adapted from [Xiaoyan Cong’s homepage](https://github.com/Oliver-Cong02/Oliver-Cong02.github.io).

## Local preview

Open `index.html` in a browser, or run:

```sh
bash run_server.sh
```

Visit <http://127.0.0.1:4000/>. Choose another port with `bash run_server.sh 8000`. Refresh after editing; press Ctrl+C in the terminal to stop the server.

The homepage uses local fonts, icons, and images. It requires no Ruby, Jekyll, npm packages, or build step.

## Repository structure

```text
index.html                 Homepage content
assets/css/home.css        Homepage styles
assets/js/home.js          Publication views
assets/fonts/              Fonts and licenses
images/                    Publication teasers, portrait, CV, WeChat QR code
favicon.ico                Site icon
project/LLaMo/             LLaMo project page and media
project/GenHSI/index.html   Redirect to Brown IVL’s GenHSI project page
about.html                 Compatibility redirect
about/index.html           Compatibility redirect
run_server.sh              Local preview server
.nojekyll                  Static GitHub Pages publishing
```

## Editing publications

Duplicate an `<article class="pub-card">` block in `index.html`, then update its title, authors, teaser, summary, and links. Set `data-year` to the publication year and `data-date` to the arXiv submission month (`YYYY-MM`). Preprints use their submission year.

The full list follows the card order in `index.html`. Within the year view, lower `data-priority` values appear first, followed by submission month. World-T3 and Ms. Forcing are the first two papers in both views. Highlight Zekun Li with `<span class="me">`; use `<sup>*</sup>` or `<sup>#</sup>` for the paper’s equal-contribution notes.

The profile photo, CV, and WeChat QR code are `images/profile.webp`, `images/CV_ZekunLi.pdf`, and `images/wechat.jpg`.

## Publishing

GitHub Pages can publish directly from the `main` branch root. `.nojekyll` disables Jekyll processing. The previous `/about/`, `/about.html`, and homepage section anchors continue to work. `/project/GenHSI/` redirects to <https://ivl.cs.brown.edu/research/genhsi>.

## Credits and licenses

The homepage layout is adapted from [Xiaoyan Cong](https://github.com/Oliver-Cong02/Oliver-Cong02.github.io). Typeface and icon-font licenses are in `assets/fonts/`. The original AcadHomepage MIT license is retained in `LICENSE`.
