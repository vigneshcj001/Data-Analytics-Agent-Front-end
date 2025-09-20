# 🚀 Data Analytics Agent

An AI-powered **Data Analytics Assistant** that allows you to upload datasets (CSV/Excel) and interact with them using **natural language queries**.  
The app uses **FastAPI + PandasAI + Groq LLM** in the backend and a **React + TailwindCSS + Framer Motion** frontend to provide an intuitive chat-based data exploration experience.

🌐 Live Demo: [Data Analytics Agent](https://data-analytics-agent-eight.vercel.app/)

---

## 📂 Repositories
- **Frontend (React + Vite)** → [Data_Analytics_Agent](https://github.com/vigneshcj001/Data_Analytics_Agent.git)  
- **Backend (FastAPI + PandasAI)** → [Data-Analytics-Agent-Back-end](https://github.com/vigneshcj001/Data-Analytics-Agent-Back-end.git)

---

## ✨ Features
- 📤 Upload CSV/Excel files for analysis.  
- 💬 Ask natural language questions about your dataset.  
- 📊 Auto-generate charts/visualizations with responses.  
- 🔑 Secure interaction with **Groq API Key**.  
- 🎨 Clean and animated UI built with **TailwindCSS** and **Framer Motion**.  
- 🔗 Full integration between frontend and backend for seamless analytics.  

---

## 🛠️ Tech Stack
### Backend
- Python **3.12.7**
- [FastAPI](https://fastapi.tiangolo.com/) – API framework  
- [Pandas](https://pandas.pydata.org/) – Data handling  
- [Matplotlib](https://matplotlib.org/) – Charting  
- [PandasAI](https://github.com/gventuri/pandas-ai) – Natural language querying  
- [LangChain-Groq](https://pypi.org/project/langchain-groq/) – LLM integration  

### Frontend
- [React.js](https://react.dev/) (Vite setup)  
- [TailwindCSS](https://tailwindcss.com/) – Styling  
- [Framer Motion](https://www.framer.com/motion/) – Animations  
- [Axios](https://axios-http.com/) – API requests  

---

## ⚙️ Installation & Setup

### 1️⃣ Backend Setup
Clone backend:
```bash
git clone https://github.com/vigneshcj001/Data-Analytics-Agent-Back-end.git
cd Data-Analytics-Agent-Back-end
````

Create & activate virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run at: `http://127.0.0.1:8000`

---

### 2️⃣ Frontend Setup

Clone frontend:

```bash
git clone https://github.com/vigneshcj001/Data_Analytics_Agent.git
cd Data_Analytics_Agent
```

Install dependencies:

```bash
npm install
```

Set environment variable in `.env`:

```
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Run frontend:

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🔑 API Key Requirement

You’ll need a **Groq API Key** to use the chat functionality.

* Sign up at [Groq Cloud](https://groq.com/) to get your API key.
* Enter the API key in the frontend input field before uploading files.

---

## 📌 Project Structure

### Backend

```
Data-Analytics-Agent-Back-end/
│── main.py          # FastAPI app
│── requirements.txt # Dependencies
```

### Frontend

```
Data_Analytics_Agent/
│── src/
│   ├── api.js
│   ├── App.jsx
│   ├── components/
│   │   ├── FileUpload.jsx
│   │   └── ChatBox.jsx
│── package.json
```

---

## 🚀 Future Enhancements

* Support for SQL databases.
* Advanced chart customization.
* Multi-user session handling.
* Export chat + charts as PDF/Report.

---

## 👨‍💻 Author

Built with ❤️ by **[Vigneshwaran](https://github.com/vigneshcj001)**


