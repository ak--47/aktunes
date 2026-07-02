# aktunes.com

Static single-page site for **aktunes.com** (AK — bass music producer), served from GitHub Pages.

## Live

- 🌐 **Site:** https://aktunes.com
- 📄 **GitHub Pages URL:** https://ak--47.github.io/aktunes/

## Deploy

Push to `main` → the [Pages workflow](.github/workflows/pages.yml) publishes the repo root
via GitHub Actions. Custom domain is set in [`CNAME`](CNAME).

## Notes

- Single page: [`index.html`](index.html) (HTML5 UP template).
- Social links (YouTube/SoundCloud/Facebook/Twitter/Store) point directly to their
  destinations — the old `aktunes.com/<service>` redirect folders were dropped.
- Experiments and old landing pages (ecorp, forrester, poached templates, ads, `.psd`
  sources, etc.) were left out; they remain in the Bluehost backup (`~/tmp/bluehostbackup`).
- Images optimized for web with `pngquant`.
