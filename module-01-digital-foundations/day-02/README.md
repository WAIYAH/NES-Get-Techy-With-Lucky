# 📅 Day 02 of Module 01 — The Internet, Browsers, Email & Online Safety

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain how the internet works in simple terms (servers, clients, URLs, HTTP)
- Use a web browser like a power user — tabs, bookmarks, history, incognito mode
- Open and use browser Developer Tools to inspect web pages
- Set up a professional email address and understand email etiquette
- Recognise phishing emails, scam websites, and practise good password hygiene

---

## 📖 Lesson Content

### How Does the Internet Work?

The internet is a **global network of computers** that talk to each other. When you visit a website, here's what happens:

1. **You** (the client) type a URL into your browser
2. Your browser sends a **request** to a **server** — a powerful computer sitting in a data centre somewhere
3. The server finds the files for that website and sends them **back** to you
4. Your browser **renders** (displays) the page on your screen

That's it. Every website, every app, every YouTube video — it's all just computers sending files back and forth.

### Key Internet Terms

| Term | What It Means | Example |
|------|--------------|---------|
| **URL** | The address of a web page | `https://www.google.com` |
| **HTTP / HTTPS** | The rules (protocol) for how data travels. HTTPS is the secure version | The `https://` at the start of a URL |
| **Server** | A computer that stores and serves websites | Google's data centres |
| **Client** | The device requesting a website | Your laptop, your phone |
| **IP Address** | A unique number that identifies every device on the internet | `192.168.1.1` |
| **DNS** | The internet's phone book — converts domain names to IP addresses | `google.com` → `142.250.80.46` |
| **Browser** | Software that displays web pages | Chrome, Firefox, Edge, Safari |

### How a URL Breaks Down

```
https://www.example.com/about/team?search=lucky#contact
  │        │         │      │          │          │
  │        │         │      │          │          └── Fragment (jump to section)
  │        │         │      │          └── Query string (extra data)
  │        │         │      └── Path (specific page)
  │        │         └── Domain name
  │        └── Subdomain
  └── Protocol (secure)
```

> 💡 **Fun fact:** There are over 1.1 billion websites on the internet, but fewer than 200 million are actively maintained.

### Web Browsers — Your Window to the Internet

A browser is the app you use to access websites. The most popular ones:

| Browser | Best For | Built By |
|---------|----------|----------|
| **Google Chrome** | Most popular, great extensions | Google |
| **Mozilla Firefox** | Privacy-focused, open source | Mozilla |
| **Microsoft Edge** | Built into Windows, fast | Microsoft |
| **Safari** | Built into macOS/iOS | Apple |
| **Brave** | Ad-blocking built in | Brave Software |

### Browser Power-User Tips

**Tabs:**
- `Ctrl + T` — Open a new tab
- `Ctrl + W` — Close current tab
- `Ctrl + Shift + T` — Reopen last closed tab (lifesaver!)
- `Ctrl + Tab` — Switch between tabs

**Navigation:**
- `Ctrl + L` — Jump to the address bar
- `F5` or `Ctrl + R` — Refresh the page
- `Ctrl + F` — Find text on the page

**Other:**
- `Ctrl + D` — Bookmark current page
- `Ctrl + Shift + N` — Open incognito/private window
- `Ctrl + H` — View browsing history

### Browser Developer Tools

Every modern browser has built-in **Developer Tools** (DevTools). This is where web developers inspect, debug, and test websites.

**How to open DevTools:**
- Press `F12` or `Ctrl + Shift + I` (Windows/Linux)
- Right-click any element on a page → **"Inspect"**

**Key DevTools tabs:**

| Tab | What It Does |
|-----|-------------|
| **Elements** | View and edit the HTML & CSS of any page — live! |
| **Console** | Run JavaScript commands and see error messages |
| **Network** | See all the files being loaded (images, scripts, etc.) |
| **Sources** | View the actual source code files |
| **Application** | See cookies, local storage, and cached data |

> 🎯 **Try this now:** Open any website → Right-click a heading → Click "Inspect" → Try changing the text. The change only affects YOUR screen and disappears when you refresh.

### Email — Your Professional Digital Address

Email is still the most important communication tool in the professional world. Let's set up a good one.

**What makes a professional email?**

| ✅ Good | ❌ Bad |
|---------|--------|
| `lucky.developer@gmail.com` | `xXcoolboy2005Xx@yahoo.com` |
| `lucky.ochieng@outlook.com` | `luckyyyy123@hotmail.com` |
| `firstname.lastname@gmail.com` | `ilovecats@gmail.com` |

**Email etiquette rules:**

1. **Use a clear subject line** — "Meeting Request: Project Discussion Wednesday" not "Hey"
2. **Start with a greeting** — "Hi [Name]," or "Good morning,"
3. **Keep it concise** — Get to the point. People are busy
4. **Proofread before sending** — Spelling mistakes look unprofessional
5. **Don't use ALL CAPS** — It feels like shouting
6. **Use a professional sign-off** — "Best regards," or "Kind regards,"

### Online Safety & Passwords

The internet is powerful, but it has risks. Here's how to stay safe:

**Recognising phishing:**

Phishing is when someone pretends to be a trusted company to steal your information.

🚩 **Red flags:**
- Email from `support@g00gle.com` (look at the spelling!)
- "Your account will be deleted in 24 hours! Click here NOW!"
- Links that don't match the sender (hover to see where they actually go)
- Unexpected attachments from unknown senders
- Requests for passwords, bank details, or personal information

**Password best practices:**

| Rule | Example |
|------|---------|
| Use **12+ characters** | `MyDog$Name1sRex!` |
| Mix **uppercase, lowercase, numbers, symbols** | `C0ff33!sLif3` |
| **Never reuse** passwords across sites | Each account gets its own |
| Use a **password manager** | Bitwarden (free), 1Password, LastPass |
| Enable **two-factor authentication (2FA)** | SMS code or authenticator app |

> ⚠️ **Never** share your password with anyone. No legitimate company will ever ask for your password via email.

---

## ✅ Step-by-Step Tasks

1. **Identify your browser** — Open your browser, click the menu (three dots or lines), then go to "Help" → "About". Note down the browser name and version.

2. **Browser scavenger hunt** — Using only keyboard shortcuts, do the following:
   - Open a new tab (`Ctrl + T`)
   - Go to `wikipedia.org`
   - Search for "World Wide Web" using `Ctrl + F`
   - Bookmark the page (`Ctrl + D`)
   - Open an incognito window (`Ctrl + Shift + N`)
   - Close the incognito window

3. **Inspect a website** — Go to any website you like. Open DevTools (`F12`). Find the main heading (usually an `<h1>` tag) in the Elements tab. Change the text to your name. Take a screenshot.

4. **Trace a website's journey** — Open DevTools → Network tab → Refresh the page. Count how many files were loaded. Write down the total number and the three largest files.

5. **Email check-up** — If you have an email account, check your spam folder. Can you spot any phishing attempts? Note down 3 red flags you find. If you don't have a professional email, set one up using Gmail today.

---

## 🧠 Knowledge Check

1. What is the difference between HTTP and HTTPS? Why does it matter?
2. What is DNS and what does it do?
3. Name three red flags that indicate a phishing email.

---

## 💪 Challenge

Create a **"Browser & Internet Cheat Sheet"** — a single page document (Google Doc, Word, or plain text) that covers:

- 10 essential browser keyboard shortcuts
- 5 rules for creating strong passwords
- 3 ways to identify a phishing email
- A diagram of how a website request works (client → DNS → server → response)

Share this with someone who isn't tech-savvy. If it helps them, you've proven you understand it well enough to teach it! 

---

## 📚 Resources

- 📖 [How Does the Internet Work? — Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work) — Clear, well-written explanation
- 🎥 [How the Internet Works in 5 Minutes — YouTube](https://www.youtube.com/watch?v=7_LPdttKXPc) — Short animated explainer
- 📖 [Chrome DevTools Guide — Google](https://developer.chrome.com/docs/devtools/) — Official documentation
- 📖 [Phishing Quiz — Google](https://phishingquiz.withgoogle.com/) — Test your ability to spot phishing
- 📖 [Bitwarden Password Manager](https://bitwarden.com/) — Free, open-source password manager

---

## 🐛 Common Mistakes to Avoid

1. **Clicking links without checking the URL** — Always hover over a link to see where it actually goes before clicking. If the URL looks suspicious or doesn't match the sender, don't click it.
2. **Using the same password everywhere** — If one site gets hacked, every account with the same password is compromised. Use a password manager instead.
3. **Ignoring HTTPS** — If a website doesn't have the padlock icon and `https://`, don't enter any personal information. It means the connection isn't encrypted.

---

## 🧭 Navigation

← [Previous Day: Understanding Computers, OS & File Management](../day-01/) | [Next Day: Cloud Tools — Google Drive & Productivity Apps →](../day-03/)
