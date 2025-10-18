# 🧱 — Deploying a React App to GitHub Pages (Single Build)

### 📘 Overview

This document explains how to build and deploy a React app to GitHub Pages using the `gh-pages` package. This setup is for one repository only (e.g., `black-dahlia-preview`).

---

## 🚀 1. Prerequisites

* Node.js and npm installed.
* A React project created with `create-react-app`.
* Your project pushed to a GitHub repository.

---

## ⚙️ 2. Install `gh-pages`

```bash
npm install --save-dev gh-pages
```

---

## 🖍️ 3. Update `package.json`

Add the following:

```json
{
  "homepage": "https://<your-username>.github.io/<your-repo>/",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "spa-fallback": "node -e \"require('fs').copyFileSync('build/index.html','build/404.html')\"",
    "predeploy": "npm run build && npm run spa-fallback",
    "deploy": "gh-pages -d build -b live"
  }
}
```

---

## 🤩 4. Add `.gitignore`

```
/node_modules
/build
/dist
.env
.DS_Store
```

---

## 🛠️ 5. Build and Deploy

```bash
npm install
npm run predeploy
npm run deploy
```

This builds the app and pushes `/build` to a **live** branch.

---

## 🌐 6. Enable GitHub Pages

GitHub → **Settings → Pages** → Source = `live` → Folder = `/` → Save.

Site URL:

```
https://<your-username>.github.io/<your-repo>/
```

---

# 🤩  Dual Deployment: Preview + Official Repo

### 📘 Overview

This setup lets you build once and deploy to two repos:

* **Preview:** `black-dahlia-preview`
* **Official:** `black-dahlia` (with custom domain)

---

## ⚙️ 1. Add the official remote

```bash
git remote add official https://github.com/<username>/<official-repo>.git
git remote -v
```

You should now see both `origin` and `official`.

---

## 🛠️ 2. Update `package.json`

```json
"scripts": {
  "build": "react-scripts build",
  "spa-fallback": "node -e \"require('fs').copyFileSync('build/index.html','build/404.html')\"",
  
  "predeploy:preview": "npm run build && npm run spa-fallback",
  "deploy:preview": "gh-pages -d build -b live",

  "predeploy:official": "npm run build && npm run spa-fallback && node -e \"require('fs').writeFileSync('build/CNAME','yourdomain.com')\"",
  "deploy:official": "gh-pages -d build -b live -r https://github.com/<username>/<official-repo>.git"
}
```

---

## 🦄 3. Deploy Commands

**Preview site:**

```bash
npm run predeploy:preview
npm run deploy:preview
```

**Official site:**

```bash
npm run predeploy:official
npm run deploy:official
```

---

## 🌐 4. GitHub Pages

* **Preview:** live branch → `https://<username>.github.io/<preview-repo>/`
* **Official:** live branch → custom domain → `https://yourdomain.com`

---

# 🌍 Connecting a Custom Domain

### 📘 Overview

This guide explains how to link a custom domain to your React app on GitHub Pages.

---

## 🛠️ 1. Add a CNAME File

Create `/public/CNAME` with your domain:

```
yourdomain.com
```

If using dual deploy, the `predeploy:official` script adds it automatically.

---

## ⚙️ 2. Configure GitHub Pages

GitHub → **Settings → Pages** → Add your **custom domain** and enable **HTTPS**.

---

## 🌐 3. Update DNS

### Root Domain (`yourdomain.com`)

Add 4 **A records**:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Subdomain (`www.yourdomain.com`)

```
Type: CNAME
Host: www
Points to: <your-username>.github.io
```

---

## 🔍 4. React Router Setup

* **Custom domain:** `<BrowserRouter basename="/">`
* **Preview site:** `<BrowserRouter basename="/black-dahlia-preview">`
* or use `<HashRouter>` to skip basename logic.

---

## ✅ 5. Verify

Visit your domain with HTTPS enabled and test routing.

Your React app is now live on GitHub Pages with full preview + production environments!
