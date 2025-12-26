# Music Link Converter

Browser extension + local Flask backend to convert music links between platforms.

## Features
- Paste a music link and get equivalents on other platforms
- Supported: Spotify, Deezer, YouTube, YouTube Music, Yandex Music, Apple Music
- Simple popup UI (extension) + JSON API (`/api/convert`)

## Requirements
- Python 3.12+
- pip
- Chrome/Edge or Firefox

## Setup
1) Clone or unpack the repo.
2) (Optional) Create venv:
```bash
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```
3) Install deps:
```bash
pip install -r requirements.txt
```

## Run the backend
```bash
source venv/bin/activate   # if using venv
python app.py
```
Backend runs at `http://localhost:5000`. Keep this terminal open.

## Load the browser extension
### Chrome / Edge
1) Open `chrome://extensions` (Edge: `edge://extensions`).
2) Enable **Developer mode**.
3) Click **Load unpacked**.
4) Select the folder `vscode-extension/chrome/` inside this project.

### Firefox (temporary add-on)
1) Open `about:debugging#addons`.
2) Click **This Firefox**.
3) Click **Load Temporary Add-on**.
4) Select `manifest.json` inside `vscode-extension/chrome/`.

## Use
1) Click the extension icon.
2) Paste a music link (Spotify/Deezer/YouTube/etc.).
3) Press **Find** to see available platforms; links open in new tab.

## Environment variables (optional)
Copy `.env.example` to `.env` and fill if you have tokens:
- `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`
- `APPLE_KEY_ID`, `APPLE_TEAM_ID`, `APPLE_SECRET_KEY`
- `YANDEX_MUSIC_TOKEN`
If not provided, some platforms may return limited results; basic search still works where possible.

## Troubleshooting
- Backend not reachable: ensure `python app.py` is running and `http://localhost:5000` is accessible.
- No results on some platforms: the song may not exist there or tokens are missing.
- Firefox extension disappears after restart: temporary add-ons unload on browser restart—reload via steps above.

## Folder layout
- `app.py` — Flask server exposing `/api/convert`
- `music_search.py` — platform search/parse logic
- `templates/`, `static/` — web UI for the Flask page
- `vscode-extension/chrome/` — browser extension (manifest, popup)

Enjoy! 🎵
