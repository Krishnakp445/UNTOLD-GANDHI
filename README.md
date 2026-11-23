# Untold Gandhi

Investigative, sourced stories about Mahatma Gandhi in English and Hindi. It's a plain static website: no build step, no server, no database.

## What's in the folder

```
index.html            the page shell (header, footer)
css/style.css         all styling
js/i18n.js            interface text in English + Hindi
js/data/gandhi.js     Case File #001: stories, timeline, sources (both languages)
js/app.js             routing, language switch, rendering
```

Open `index.html` in a browser to preview it locally.

## Adding a story

Open `js/data/gandhi.js`, copy one story block, give it a new `id`, and fill in both `en` and `hi`.
Set `status` to `documented`, `debated` or `disputed`. Every story needs `sources`.

## Adding the next historical figure

1. Copy `js/data/gandhi.js` to, for example, `js/data/ambedkar.js`.
2. Change `id`, `fileNo`, `name`, `years`, `timeline` and `stories`.
3. Add `<script src="js/data/ambedkar.js"></script>` to `index.html` before `js/app.js`.

The Files page lists every figure automatically.

## Free hosting

### Option A: Netlify Drop (fastest, about 2 minutes)
1. Unzip this folder.
2. Go to https://app.netlify.com/drop
3. Drag the `untold-gandhi` folder onto the page. You get a live `*.netlify.app` link.
4. Sign up (free) and claim the site straight away, or it's deleted after about an hour.
5. To update: Site → Deploys → drag the folder in again.

### Option B: GitHub Pages (best long-term, free version history)
1. Create a free account at https://github.com and a new **public** repository called `untold-gandhi`.
2. Click **Add file → Upload files**, drag in the *contents* of this folder (so `index.html` is at the top level), and commit.
3. Go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. After a minute or two your site is live at `https://<your-username>.github.io/untold-gandhi/`.
5. To update: upload the changed files again, or edit them on GitHub.

### Custom domain (optional, about £8–12 a year for the domain itself)
Both hosts give you free HTTPS on a custom domain such as `untoldgandhi.com`. Buy the domain from any registrar, then follow the host's "custom domain" instructions.
