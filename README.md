# Personal academic homepage (template skeleton)

Dependency-free static site for GitHub Pages: one `index.html`, one stylesheet,
a small script, and a `404.html`. Sections: About · News · Research Interests ·
Publications (conference / journal / workshop / collapsible domestic) · CV link.

All text is placeholder. Search for `[` brackets and `TODO` comments in
`index.html` and replace them with your own content.

## Files

```
index.html            main page (all sections)
404.html              not-found page
assets/css/style.css  styles (design tokens at the top of the file)
assets/js/main.js     footer year, active-nav highlight, open <details> on #pub-k* links
assets/img/profile.svg   placeholder portrait → replace with your photo
assets/img/favicon.svg   site icon
assets/files/         put CV.pdf here
```

## Local preview

Open `index.html` directly, or:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a **public** repository named exactly `<your-github-id>.github.io`.
2. Push this folder to its `main` branch:
   ```bash
   git init && git checkout -b main
   git add .
   git commit -m "Initial homepage skeleton"
   git remote add origin git@github.com:<your-github-id>/<your-github-id>.github.io.git
   git push -u origin main
   ```
3. On GitHub: Settings → Pages → Source = "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site appears at `https://<your-github-id>.github.io/` within a minute or two.
5. Update `canonical`, `og:url`, and `og:image` in `index.html` to that URL.
