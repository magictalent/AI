# From repo root
# 1. Start backend
cd backend
python -m venv .venv
source .venv/bin/activate # or .venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py


# 2. Start frontend (in another terminal)
cd frontend
npm install
npm run dev


# Frontend dev server runs on http://localhost:5173 and backend on http://localhost:5000