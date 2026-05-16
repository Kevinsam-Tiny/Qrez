# QR-ez — Agent Guide

## Structure
- **Frontend:** `/src` — React 18, CRA-based (`react-scripts`), custom webpack (`webpack.config.js`) with `@svgr/webpack` for SVGs and `file-loader` for images
- **Backend:** `/backend` — Flask Python app (entrypoint `app.py`). Two endpoints on `localhost:5000`: `POST /generate_qr` (generates QR from URL) and `POST /upload` (enhances QR image via FSRCNN super-resolution model)
- **Deployment:** Firebase Hosting project `qrez4u` (see `.firebaserc`, `firebase.json`). CI: GitHub Actions runs `npm run build` then deploys on PR.

## Commands
| Action | Command |
|---|---|
| Start dev server (frontend, port 3000) | `npm start` |
| Start backend (Flask, port 5000) | `python app.py` from `/backend` |
| Build for production | `npm run build` (outputs to `/build`) |
| Run frontend tests | `npm test` (CRA watch mode, React Testing Library) |
| Deploy to Firebase | `firebase deploy` (after `npm run build`) |

## Key details
- **Firebase config** is in `/Firebase.js` (not `.env`). The API key is hardcoded — no env file loading is configured.
- **Backend prerequisites:** Install `/backend/requirements.txt`, requires TensorFlow 2.15.0 and the `fsrcnn_model.h5` file.
- **CRA config** is in `package.json` (`eslintConfig` extends `react-app`/`react-app/jest`). No Prettier or standalone ESLint config exists.
- **No AGENTS.md** existed before — this file is authoritative.
