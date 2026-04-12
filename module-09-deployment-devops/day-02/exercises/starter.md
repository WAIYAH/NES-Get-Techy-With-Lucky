# 📝 Module 09 · Day 02 — Exercises (Starter)
# Environment Variables, Secrets & .env Files

---

## Exercise 1: Set Up dotenv

Create a new Node.js project and configure environment variables.

### Steps:

1. Create a new folder called `env-practice` and initialise it:
   ```bash
   mkdir env-practice
   cd env-practice
   npm init -y
   npm install dotenv express
   ```

2. Create a `.env` file with these variables:
   ```
   # TODO: Add the following variables
   # PORT = 3000
   # APP_NAME = "My Secure App"
   # API_KEY = "sk_test_fake_key_12345"
   # DATABASE_URL = "mongodb+srv://user:pass@cluster.example.net/mydb"
   ```

3. Create an `index.js` file that:
   - Loads dotenv
   - Reads PORT and APP_NAME from process.env
   - Starts an Express server on that port
   - Has a `GET /` route that returns `{ app: APP_NAME, status: "running" }`
   - Does NOT expose API_KEY or DATABASE_URL in any route

   ```javascript
   // TODO: Write your server code here
   ```

4. Add `.env` to `.gitignore`

5. Create a `.env.example` with placeholder values

---

## Exercise 2: Frontend Environment Variables

### Steps:

1. Create a Vite project (or use an existing one):
   ```bash
   npm create vite@latest frontend-env -- --template vanilla
   cd frontend-env
   npm install
   ```

2. Create a `.env` file with:
   ```
   # TODO: Add a VITE_ prefixed variable for API URL
   # TODO: Add a VITE_ prefixed variable for app title
   ```

3. In `main.js`, read and display the environment variables on the page:
   ```javascript
   // TODO: Access import.meta.env.VITE_* variables
   // TODO: Display them on the page
   ```

4. Run `npm run build` and check if the variables appear in the built output

---

## Exercise 3: Backend Proxy for API Keys

Build an Express server that keeps an API key secret on the backend.

### Steps:

1. Create a `.env` with a weather API key:
   ```
   # TODO: Add WEATHER_API_KEY variable
   ```

2. Create an Express route `GET /api/weather?city=Nairobi` that:
   - Reads the API key from `process.env`
   - Makes a fetch request to the weather API
   - Returns the weather data to the client
   - Never exposes the API key to the frontend

   ```javascript
   // TODO: Write your proxy route here
   ```

3. Create a simple frontend that calls YOUR server, not the weather API directly
