# 📅 Day 05 of Module 05 — Fetch API — Getting Data from the Internet

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Understand what an API is and how web apps use them
- Use the Fetch API to retrieve data from external sources
- Handle Promises with `.then()` / `.catch()` and `async` / `await`
- Parse JSON data and display it on a web page
- Handle loading states and errors gracefully

---

## 📖 Lesson Content

### What Is an API?

An **API** (Application Programming Interface) is a way for two programs to communicate. When you use a weather app, it doesn't predict the weather — it **asks a weather API** for the data and shows it to you.

**Real-world analogy:** An API is like a waiter in a restaurant. You (the client) tell the waiter (the API) what you want, the waiter goes to the kitchen (the server), and brings back your food (the data).

### The Fetch API

`fetch()` is built into every modern browser. It lets you make HTTP requests to get or send data.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

**What's happening:**
1. `fetch()` sends a request to the URL
2. `.then(response => response.json())` — converts the response to JSON
3. `.then(data => ...)` — use the data
4. `.catch(error => ...)` — handle any errors

### JSON — The Data Format

APIs return data as **JSON** (JavaScript Object Notation):

```json
{
  "id": 1,
  "name": "Lucky Ochieng",
  "email": "lucky@example.com",
  "skills": ["HTML", "CSS", "JavaScript"]
}
```

JSON looks like a JavaScript object — and `response.json()` converts it into one.

### Async / Await (Modern Syntax)

`async/await` makes Promise code look cleaner:

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
}

getUsers();
```

> 💡 `async/await` is just a prettier way to write Promises. They do the same thing.

### Displaying API Data on a Page

```javascript
async function displayUsers() {
  const container = document.querySelector("#user-list");
  container.innerHTML = "<p>Loading...</p>";  // Loading state

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    container.innerHTML = "";  // Clear loading message

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p class="error">Failed to load users. Please try again.</p>`;
  }
}

displayUsers();
```

### Free APIs to Practice With

| API | URL | Returns |
|-----|-----|---------|
| JSONPlaceholder | `jsonplaceholder.typicode.com` | Fake users, posts, comments |
| Dog CEO | `dog.ceo/api/breeds/image/random` | Random dog images |
| PokéAPI | `pokeapi.co/api/v2/pokemon/pikachu` | Pokémon data |
| REST Countries | `restcountries.com/v3.1/all` | Country information |
| Open Trivia DB | `opentdb.com/api.php?amount=10` | Quiz questions |

### HTTP Methods

| Method | Purpose | Example |
|--------|---------|---------|
| `GET` | Read / retrieve data | Get a list of users |
| `POST` | Create new data | Add a new user |
| `PUT` | Update existing data | Edit a user |
| `DELETE` | Remove data | Delete a user |

#### POST Request Example

```javascript
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "My New Post",
      body: "This is the content of my post.",
      userId: 1
    })
  });

  const data = await response.json();
  console.log("Created:", data);
}
```

### Error Handling Best Practices

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "TypeError") {
      console.error("Network error — check your internet connection");
    } else {
      console.error("Fetch failed:", error.message);
    }
    return null;
  }
}
```

---

## ✅ Step-by-Step Tasks

1. **Fetch and log** — Use `fetch` to get data from `https://jsonplaceholder.typicode.com/posts/1`. Log the title and body to the console.

2. **Display user list** — Fetch all users from JSONPlaceholder. Display each user's name, email, and city in styled cards on the page.

3. **Random dog image** — Fetch a random dog image from `https://dog.ceo/api/breeds/image/random`. Display it as an `<img>` element. Add a "New Dog" button that fetches another image.

4. **Error handling** — Deliberately fetch from an invalid URL. Use `try/catch` to show an error message on the page instead of crashing.

5. **Search feature** — Fetch all users. Add an input field that filters the displayed users as you type (using the `input` event from yesterday).

---

## 🧠 Knowledge Check

1. What is JSON and why is it the standard data format for APIs?
2. What is the difference between `.then()` / `.catch()` and `async` / `await`?
3. Why should you check `response.ok` before parsing the data?

---

## 💪 Challenge

Build a **"Country Explorer"** app:

- Fetch data from `https://restcountries.com/v3.1/all`
- Display country cards with: flag, name, capital, population, and region
- Add a search bar that filters countries by name
- Add region filter buttons (Africa, Europe, Americas, Asia, Oceania)
- Show a loading spinner while data is being fetched
- Handle errors gracefully with a user-friendly message
- Make it responsive using CSS Grid or Flexbox

---

## 📚 Resources

- 📖 [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — Official guide
- 📖 [MDN — async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) — Async programming guide
- 📖 [JavaScript.info — Fetch](https://javascript.info/fetch) — Clear examples
- 📖 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — Free fake API for testing
- 🎥 [Fetch API — Fireship](https://www.youtube.com/watch?v=cuEtnrL9-H0) — Quick video explainer

---

## 🐛 Common Mistakes to Avoid

1. **Not checking `response.ok`** — `fetch` doesn't throw an error for HTTP errors like 404 or 500. You must check `response.ok` manually and throw your own error.
2. **Forgetting `await` before `fetch()` or `.json()`** — Without `await`, you get a Promise object instead of the actual data. Missing this is the most common async bug.
3. **Not using `try/catch` for error handling** — Network requests can fail for many reasons (no internet, server down, rate limiting). Always handle errors so your app doesn't silently break.

---

## 🧭 Navigation

← [Previous Day: Events & Interactivity](../day-04/) | [Next Module: Frontend Mastery — React →](../../module-06-frontend-mastery/)
