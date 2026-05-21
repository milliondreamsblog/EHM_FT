# EHM Consultancy Website — Knowledge Transfer Guide

This document explains, in plain language, how the EHM Consultancy website is built, how to run it on a developer's laptop, and how to deploy it to the live internet.

The project has **two parts**:

1. **Backend** — the server that stores data (blogs, articles, case studies, newsletter, contact submissions, admin login etc.). Built with Node.js + Express + TypeScript + MongoDB + Cloudinary. This is hosted on **Render**.
2. **Frontend** — the website that users see in the browser. Built with React + Vite. This is hosted on **Hostinger** (uploaded via FileZilla).

Both parts must be deployed for the website to work correctly. The frontend (browser) talks to the backend (Render server) over the internet to fetch and save data.

---

## Part 1 — What you need on your computer (one-time setup)

Install these on the company's computer before anything else.

| Software | Purpose | Where to download |
|---|---|---|
| **Node.js (version 20 or newer)** | Runs the backend and builds the frontend | https://nodejs.org (download the LTS version) |
| **Git** | Used to download/upload the source code | https://git-scm.com/downloads |
| **Visual Studio Code** | Code editor (optional but recommended) | https://code.visualstudio.com |
| **FileZilla** | FTP tool used to upload the frontend to Hostinger | https://filezilla-project.org/download.php?type=client |

After installing Node.js, open Command Prompt / PowerShell and confirm everything works:

```bash
node -v
npm -v
git --version
```

You should see version numbers printed for each. If any command says "not recognized", reinstall that tool and restart the computer.

---

## Part 2 — Project folder structure

When you open the project folder you'll see roughly this:

```
EHM_FT/
├── backend/                   ← The server code
│   ├── src/                   ← TypeScript source code
│   ├── dist/                  ← Compiled JavaScript (created by `npm run build`)
│   ├── uploads/               ← Local file uploads (not used in production)
│   ├── .env                   ← Secret keys (NEVER share, NEVER commit to git)
│   └── package.json
│
├── frontend/                  ← The website code
│   ├── src/
│   │   ├── api/axios.js       ← Important: contains the backend URL
│   │   └── ...
│   ├── dist/                  ← Built website (created by `npm run build`)
│   ├── public/
│   └── package.json
│
└── KNOWLEDGE_TRANSFER.md      ← This document
```

---

## Part 3 — Running the project locally (on your own computer)

This is for testing changes before deploying. Skip this section if you just want to deploy.

### 3.1 Run the backend locally

1. Open a terminal **inside the `backend` folder**.
2. Install all the libraries the backend needs (only required the first time, or after pulling new code):
   ```bash
   npm install
   ```
3. Make sure the file `backend/.env` exists with these contents (this file is **not** in git, you need to create it manually if it's missing):
   ```env
   JWT_SECRET=Hare Krishna
   CLOUDINARY_CLOUD_NAME=dkgeudrfw
   CLOUDINARY_API_KEY=194625962947871
   CLOUDINARY_API_SECRET=ynms07eOlFEPSo0C0FXFCV-ZxAg
   MONGO_URL=mongodb+srv://harshitclimagroanalytics_db_user:Rs3Rw0hIsuYz2BJ0@cluster0.3bsjmze.mongodb.net/EHM
   PORT=5000
   ```
4. Build and start the server:
   ```bash
   npm run dev
   ```
5. If everything is correct you will see in the terminal:
   ```
   Server running on port 5000
   MongoDB connected successfully
   ```
   Leave this terminal window open. The local backend is now running at `http://localhost:5000`.

### 3.2 Run the frontend locally

1. Open a **second** terminal **inside the `frontend` folder** (keep the backend terminal open).
2. Install libraries (only the first time):
   ```bash
   npm install
   ```
3. **(Optional, only if you want the local website to talk to your local backend)** open `frontend/src/api/axios.js` and temporarily change the line:
   ```js
   baseURL: "https://ehm-ft.onrender.com",
   ```
   to:
   ```js
   baseURL: "http://localhost:5000",
   ```
   ⚠️ Change it back to the live URL before building for production.
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser. You should see the website.

---

## Part 4 — Deploying the BACKEND to Render

The backend is the Node.js server. We host it for free on **Render** (https://render.com). Render automatically pulls the code from GitHub, builds it, and runs it on the internet.

### 4.1 One-time setup: get the code into GitHub

If the company doesn't already have the code in their own GitHub account:

1. Create a free GitHub account at https://github.com.
2. Create a new repository (e.g. `ehm-website`). Keep it **Private**.
3. From the project folder, push the code to that repo:
   ```bash
   git remote remove origin
   git remote add origin https://github.com/<your-github-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
   GitHub will ask for your username + a personal access token (not your password — generate one from GitHub Settings → Developer settings → Personal access tokens).

### 4.2 Create a Render account

1. Go to https://render.com and click **Sign Up**.
2. Sign up using the same GitHub account from step 4.1 — this lets Render read your repo.

### 4.3 Create the Web Service on Render

1. On the Render dashboard click **New +** → **Web Service**.
2. **Connect your GitHub repo** when prompted, then select the `ehm-website` repository.
3. Fill in the form exactly like this:

| Field | Value |
|---|---|
| **Name** | `ehm-ft` *(this becomes part of the URL, e.g. `ehm-ft.onrender.com`. If you use a different name the frontend URL needs to be updated — see Part 5)* |
| **Region** | Singapore (or whichever is closest) |
| **Branch** | `main` |
| **Root Directory** | `backend` ⚠️ **Very important — this tells Render the backend lives in the `backend` subfolder** |
| **Runtime / Environment** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Instance Type** | `Free` |

4. Scroll down to **Environment Variables** and click **Add Environment Variable** for each row below. (Render injects these as `process.env.XXX` at runtime — the code reads them from there.)

| Key | Value | What it's for |
|---|---|---|
| `JWT_SECRET` | `Hare Krishna` | Signs admin login tokens. Used in `backend/src/middleware.ts` and `backend/src/routes/AuthAdmin.ts`. |
| `MONGO_URL` | `mongodb+srv://harshitclimagroanalytics_db_user:Rs3Rw0hIsuYz2BJ0@cluster0.3bsjmze.mongodb.net/EHM` | The MongoDB Atlas connection string — this is where all blogs, articles, admins, etc. are stored. Used in `backend/src/index.ts`. |
| `CLOUDINARY_CLOUD_NAME` | `dkgeudrfw` | Cloudinary account name (used to host uploaded images and videos). |
| `CLOUDINARY_API_KEY` | `194625962947871` | Cloudinary API key. |
| `CLOUDINARY_API_SECRET` | `ynms07eOlFEPSo0C0FXFCV-ZxAg` | Cloudinary API secret. |

> **Note:** You do **not** need to add a `PORT` variable — Render sets it automatically and the backend reads it from `process.env.PORT` (see `backend/src/index.ts` line 108).

5. Click **Create Web Service**. Render will start building and deploying. The first build takes ~3–5 minutes.

### 4.4 Confirm the backend is live

When the build finishes, Render shows the public URL at the top of the page, for example:

```
https://ehm-ft.onrender.com
```

Open that URL with `/hello` at the end:

```
https://ehm-ft.onrender.com/hello
```

You should see the words **`Hello World`** in the browser. ✅ The backend is live.

> **Free-tier note:** Render's free plan puts the server to sleep after ~15 minutes of inactivity. The first request after sleep takes ~30–60 seconds. If this is a problem, upgrade to a paid plan ($7/month).

### 4.5 Re-deploying after code changes

Whenever you push new code to the `main` branch on GitHub, Render automatically rebuilds and re-deploys the backend. No manual step needed.

You can also click **Manual Deploy → Deploy latest commit** on Render to force a redeploy.

---

## Part 5 — Connecting the FRONTEND to the new backend URL

Whenever the backend's Render URL changes (for example because you used a new service name), you must update the frontend so it knows where to send requests.

1. Open the file: `frontend/src/api/axios.js`
2. Find the line:
   ```js
   baseURL: "https://ehm-ft.onrender.com",
   ```
3. Replace it with the new URL you got from Render (no trailing slash). For example:
   ```js
   baseURL: "https://ehm-backend-xxx.onrender.com",
   ```
4. Save the file. You will rebuild the frontend in Part 6.

> **There is only one file to change.** All API calls in the frontend use this single `axios.js` configuration.

---

## Part 6 — Deploying the FRONTEND to Hostinger via FileZilla

The frontend is a static website (just HTML/CSS/JS files after building). We:

1. **Build** the React project → produces a `dist` folder.
2. **Upload** the contents of `dist` to Hostinger using FileZilla.

### 6.1 Build the frontend

1. Open a terminal inside the `frontend` folder.
2. Make sure you've done Part 5 (the backend URL inside `axios.js` is correct).
3. Run:
   ```bash
   npm install
   npm run build
   ```
4. After ~30 seconds, a folder called `frontend/dist/` appears. This folder contains the entire website ready to upload. It typically contains:
   ```
   dist/
   ├── index.html
   ├── favicon.png
   └── assets/
       ├── index-XXXXX.js
       ├── index-XXXXX.css
       └── ... (images, fonts, etc.)
   ```

### 6.2 Open FileZilla and connect to Hostinger

1. Launch **FileZilla**.
2. At the top of the window there's a **Quickconnect bar**. Enter these values:

   | Field | Value |
   |---|---|
   | **Host** | `82.25.125.222` |
   | **Username** | `u526900603.ehmconsultancy.co.in` |
   | **Password** | `akshat@AK23` |
   | **Port** | `21` |

3. Click **Quickconnect**.
4. The bottom panes will populate:
   - **Left pane = your computer** (Local site)
   - **Right pane = Hostinger server** (Remote site)

> If you get a certificate warning, click **OK** / **Always trust**.

### 6.3 Navigate to the right folders

**On the LEFT pane (your computer):**
- Browse to `C:\Users\Akshat Darshi\Desktop\EHM_FT\EHM_FT\frontend\dist`
- You should now see `index.html`, `favicon.png`, and the `assets` folder listed in the lower-left pane.

**On the RIGHT pane (Hostinger):**
- Navigate into the folder named `public_html` (or `domains/ehmconsultancy.co.in/public_html` depending on the account layout).
- This is the folder that the public website (`https://ehmconsultancy.co.in`) is served from.

### 6.4 Delete the OLD website files (important)

Before uploading the new build, remove the old files so leftover/stale files don't break the new site.

1. In the **right pane** (Hostinger), select all the files inside `public_html` (Ctrl + A).
2. Right-click → **Delete**.
3. Confirm. Wait until FileZilla finishes deleting.

> ⚠️ Do **not** delete the `public_html` folder itself — only the files **inside** it. If there are special files like `.htaccess` or hidden config files you want to keep, untick those before deleting.

### 6.5 Upload the new build

1. In the **left pane**, select **all contents** of the `dist` folder (Ctrl + A) — that means `index.html`, `favicon.png`, and the `assets` folder.
2. **Drag** the selected items from the left pane and drop them onto the right pane (into `public_html`).
3. FileZilla will start uploading. The bottom of the screen shows a progress queue. Wait until it says **"Successful transfers"** and the failed/queued lists are empty.

> ⚠️ Do **not** drag the `dist` folder itself — drag the **contents** of `dist`. The Hostinger `public_html` folder must directly contain `index.html`, not `public_html/dist/index.html`.

### 6.6 Verify the website is live

Open https://ehmconsultancy.co.in in your browser. The new version should load.

If you see an old version, do a **hard refresh** in the browser:
- Windows: `Ctrl + Shift + R`
- Or open the site in an Incognito / Private window.

---

## Part 7 — Common things that go wrong (and fixes)

| Problem | Likely cause | Fix |
|---|---|---|
| Website loads but data doesn't show, or login fails | Frontend `axios.js` `baseURL` doesn't match the live Render URL | Re-do Part 5 + Part 6. |
| Render shows "Application failed to respond" | An env var is missing or the `MONGO_URL` is wrong | Open Render → your service → **Environment** tab. Confirm all 5 variables are present and correctly spelled. |
| First request is very slow (30–60s) | Render free-tier server was sleeping | Normal. Upgrade to paid plan to remove sleep. |
| FileZilla upload fails repeatedly | Network/firewall blocking port 21 | In FileZilla go to `Edit → Settings → Connection → FTP` and try **Passive mode**. |
| Website shows blank page after upload | You uploaded the `dist` folder instead of its contents | Re-upload making sure `index.html` sits directly inside `public_html`. |
| Admin login doesn't work | `JWT_SECRET` on Render is different from what created the existing admin tokens | Keep the same `JWT_SECRET` (`Hare Krishna`) on Render. If changed, all logged-in admins must log in again. |
| Images uploaded by admin don't appear | Cloudinary credentials wrong | Re-check `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` on Render. |

---

## Part 8 — Where the data actually lives

It's important to understand that **the website code does not contain the data**. The data lives in two cloud services:

1. **MongoDB Atlas** (database) — stores blogs, articles, case studies, contact submissions, newsletter subscribers, footprint entries, and admin accounts. Connection string is the `MONGO_URL` env var.
2. **Cloudinary** (media storage) — stores all images and videos uploaded through the admin panel. Connection is via the three `CLOUDINARY_*` env vars.

This means:
- Re-deploying the backend to a new Render service **does not** delete any data — as long as you keep the same `MONGO_URL` and Cloudinary credentials, all blogs/articles/etc. remain.
- If you ever change the MongoDB user password or rotate the Cloudinary keys, you must update the env vars on Render too.

---

## Part 9 — Quick reference card (one-page summary)

### To re-deploy the BACKEND
1. Push code changes to GitHub `main` branch → Render auto-deploys.
2. Confirm at `https://<your-render-name>.onrender.com/hello` shows "Hello World".

### To re-deploy the FRONTEND
1. (If backend URL changed) Edit `frontend/src/api/axios.js` line 4.
2. In `frontend/`: `npm run build`.
3. Open FileZilla → connect to `82.25.125.222` (user `u526900603.ehmconsultancy.co.in`, port 21).
4. In `public_html`: delete old files.
5. Drag the **contents** of `frontend/dist/` into `public_html`.
6. Hard-refresh https://ehmconsultancy.co.in.

### Live URLs
- Website: **https://ehmconsultancy.co.in**
- Backend API: **https://ehm-ft.onrender.com**
- Admin login: **https://ehmconsultancy.co.in/admin/login**

### Credentials cheat-sheet (KEEP PRIVATE)

**Hostinger FTP (FileZilla):**
- Host: `82.25.125.222`
- Username: `u526900603.ehmconsultancy.co.in`
- Password: `akshat@AK23`
- Port: `21`

**Backend env vars (Render):**
- `JWT_SECRET` = `Hare Krishna`
- `MONGO_URL` = `mongodb+srv://harshitclimagroanalytics_db_user:Rs3Rw0hIsuYz2BJ0@cluster0.3bsjmze.mongodb.net/EHM`
- `CLOUDINARY_CLOUD_NAME` = `dkgeudrfw`
- `CLOUDINARY_API_KEY` = `194625962947871`
- `CLOUDINARY_API_SECRET` = `ynms07eOlFEPSo0C0FXFCV-ZxAg`

> Treat these credentials like banking passwords. Never share them publicly, never commit them to a public GitHub repo, and rotate them if a former employee leaves.
