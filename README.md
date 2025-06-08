# 📄 Random Fact Fetcher (Frontend Task)

A simple React app that fetches a random fact from the [API Ninjas Facts API](https://api-ninjas.com/api/facts) and displays it on the page when a button is clicked.

---

## ✨ Features

- Built using **React** and **Vite**
- Uses **async/await** for API calls
- Fetches facts securely using an **API key**
- Clean, minimal UI with basic Tailwind styling (optional)

---

## 🖼️ Preview

![screenshot](./screenshot.png) <!-- Add a screenshot of the app here if available -->

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mayurk224/frontend-task-for-yogotribe.git
cd frontend-task-for-yogotribe
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory and add your API key:

```
VITE_API_NINJAS_KEY=your_actual_api_key_here
```

> You can get a free API key by signing up at [https://api-ninjas.com](https://api-ninjas.com)

### 4. Start the Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🧪 Usage

* Click the **"Get Random Fact"** button
* A random fact will be fetched and displayed below the button

---

## 🛠 Tech Stack

* React (JavaScript)
* Vite
* Fetch API with async/await
* API Ninjas Facts API

---

## 📁 Project Structure

```
random-fact-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── .env
├── package.json
└── README.md
```

---

## 🧠 Sample Code (App.jsx)

```jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/facts', {
        headers: {
          'X-Api-Key': import.meta.env.VITE_API_NINJAS_KEY,
        },
      });
      const data = await response.json();
      setFact(data[0]?.fact || 'No fact found.');
    } catch (error) {
      setFact('Error fetching fact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <button
        onClick={fetchFact}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {loading ? 'Loading...' : 'Get Random Fact'}
      </button>
      {fact && <p className="mt-4 text-lg text-center text-gray-800">{fact}</p>}
    </div>
  );
}

export default App;
```
