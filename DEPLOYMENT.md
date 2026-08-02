# Kalopathor Demo — Deployment Guide

## Frontend (Vercel)

```bash
cd frontend
npm install
npm run build
# Push to GitHub, connect to Vercel, deploy
```

**Environment Variables in Vercel:**
- `VITE_API_BASE`: Backend API URL (e.g., `https://api.kalopathor.com`)

---

## Backend (Local or Cloud)

### Option 1: Local Akamai (Development)
```bash
source .venv/bin/activate
python src/backend_local.py
# Runs on http://localhost:8000
```

### Option 2: Cloud Deployment (Production)

#### Deploy to Heroku/Railway/Render
```bash
# Update frontend VITE_API_BASE to your cloud URL
# Example: https://kalopathor-api.herokuapp.com
```

**Environment Variables Required:**
```
GOOGLE_GENAI_API_KEY=your-key
MODAL_TOKEN_ID=your-token-id
MODAL_TOKEN_SECRET=your-token-secret
```

#### Deploy to Modal (Recommended for this project)
Use the original `scripts/demo 1 backend.py` and `scripts/demo 2 backend.py`:
```bash
modal deploy scripts/demo_1_backend.py
modal deploy scripts/demo_2_backend.py
```

---

## Local Development

### Frontend + Backend Together
```bash
# Terminal 1: Backend
source .venv/bin/activate
python src/backend_local.py

# Terminal 2: Frontend
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed (Heroku/Railway/Modal)
- [ ] `VITE_API_BASE` set in Vercel environment
- [ ] CORS enabled on backend (already configured)
- [ ] Test both /api/dedup and /api/extract endpoints
- [ ] Share demo link with stakeholders

---

## API Endpoints

**Health Check:**
```
GET {API_BASE}/health
```

**Deduplication:**
```
POST {API_BASE}/api/dedup
Body: {"csv_data": "name,phone\nRahim,017123..."}
```

**Form Extraction:**
```
POST {API_BASE}/api/extract
Body: {"image_base64": "...", "mime_type": "image/jpeg"}
```

---

**Firm:** Kalopathor  
**Developer:** Sam Karim (samkarim@kalopathor.com)
