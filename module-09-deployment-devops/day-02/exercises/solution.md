# ✅ Module 09 · Day 02 — Solutions
# Environment Variables, Secrets & .env Files

---

## Exercise 1: Set Up dotenv

### .env
```
PORT=3000
APP_NAME=My Secure App
API_KEY=sk_test_fake_key_12345
DATABASE_URL=mongodb+srv://user:pass@cluster.example.net/mydb
```

### .env.example
```
PORT=3000
APP_NAME=Your App Name
API_KEY=your_api_key_here
DATABASE_URL=your_mongodb_connection_string
```

### .gitignore
```
.env
.env.local
.env.production
node_modules/
```

### index.js
```javascript
require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "Default App";

app.get("/", (req, res) => {
  res.json({ app: appName, status: "running" });
});

// Intentionally NOT exposing API_KEY or DATABASE_URL
// Those are used internally only

app.listen(port, () => {
  console.log(`${appName} running on port ${port}`);
});
```

---

## Exercise 2: Frontend Environment Variables

### .env
```
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My Awesome App
```

### main.js
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

document.querySelector("#app").innerHTML = `
  <div>
    <h1>${appTitle}</h1>
    <p>API URL: ${apiUrl}</p>
  </div>
`;
```

---

## Exercise 3: Backend Proxy for API Keys

### .env
```
PORT=3000
WEATHER_API_KEY=your_openweathermap_key_here
```

### server.js
```javascript
require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Weather API error" });
    }
    const data = await response.json();
    res.json({
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Serve a simple frontend
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Weather proxy running on port ${port}`);
});
```

### public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Weather Dashboard</title>
</head>
<body>
  <h1>Weather Dashboard</h1>
  <input type="text" id="city" placeholder="Enter city" value="Nairobi" />
  <button id="search">Search</button>
  <div id="result"></div>

  <script>
    document.getElementById("search").addEventListener("click", async () => {
      const city = document.getElementById("city").value;
      const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
      const data = await res.json();
      document.getElementById("result").innerHTML = data.error
        ? `<p>Error: ${data.error}</p>`
        : `<p>${data.city}: ${data.temp}°C — ${data.description}</p>`;
    });
  </script>
</body>
</html>
```
