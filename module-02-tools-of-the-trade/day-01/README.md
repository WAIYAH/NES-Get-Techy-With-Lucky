# 📅 Day 01 of Module 02 — Setting Up VS Code, Terminal Basics & Folder Structures

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Install and configure VS Code — the code editor used by millions of developers
- Install essential extensions that make coding faster and easier
- Open and use the built-in terminal to run basic commands
- Navigate folders, create files, and manage projects from the command line
- Set up a clean project folder structure for web development

---

## 📖 Lesson Content

### What Is a Code Editor?

A code editor is a specialised text editor designed for writing code. Think of it like Microsoft Word, but for programmers. It gives you features like:

- **Syntax highlighting** — different colours for different parts of your code
- **Auto-completion** — suggests what you're about to type
- **Error detection** — underlines mistakes before you even run your code
- **Integrated terminal** — run commands without leaving the editor

### Why VS Code?

**Visual Studio Code (VS Code)** is the most popular code editor in the world. It's:

- ✅ Free and open source
- ✅ Works on Windows, Mac, and Linux
- ✅ Incredibly fast and lightweight
- ✅ Has thousands of extensions
- ✅ Used by professional developers at Google, Microsoft, Facebook, and beyond

### Step 1: Install VS Code

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the big **Download** button (it detects your OS automatically)
3. Run the installer
4. ✅ Check "Add to PATH" during installation (important for terminal use)
5. Open VS Code — you should see the Welcome tab

### Step 2: Essential Extensions

Click the **Extensions** icon in the left sidebar (or press `Ctrl+Shift+X`) and install these:

| Extension | What it does |
|-----------|-------------|
| **Live Server** | Launches a local server that auto-refreshes your browser when you save |
| **Prettier** | Automatically formats your code to look clean and consistent |
| **Auto Rename Tag** | Renames matching HTML tags automatically |
| **Material Icon Theme** | Better file/folder icons so you can identify files faster |

### The Terminal — Your Command Centre

The terminal (also called command line, shell, or console) lets you talk to your computer using text commands instead of clicking buttons.

**Open the terminal in VS Code:** Press `` Ctrl+` `` (backtick) or go to **View → Terminal**.

### Essential Terminal Commands

**Windows (PowerShell / Command Prompt):**

```bash
# See where you are
cd

# List files and folders
dir

# Move into a folder
cd folder-name

# Go up one level
cd ..

# Create a new folder
mkdir my-project

# Create a new file
echo. > index.html

# Clear the screen
cls
```

**Mac / Linux (Terminal):**

```bash
# See where you are
pwd

# List files and folders
ls

# Move into a folder
cd folder-name

# Go up one level
cd ..

# Create a new folder
mkdir my-project

# Create a new file
touch index.html

# Clear the screen
clear
```

### Setting Up a Web Project Folder

Every web project should have a clear, consistent folder structure. Here's a good starter:

```
my-first-website/
├── index.html        ← Your main HTML file (the homepage)
├── css/
│   └── style.css     ← Your stylesheet
├── js/
│   └── script.js     ← Your JavaScript file
├── img/              ← Your images
└── README.md         ← Project description
```

Let's create this using the terminal:

```bash
mkdir my-first-website
cd my-first-website
mkdir css js img
```

Then create the files in VS Code, or use `touch` (Mac/Linux) or `echo. >` (Windows).

---

## ✅ Step-by-Step Tasks

1. **Install VS Code** — Download and install it from [code.visualstudio.com](https://code.visualstudio.com/). Open it and take a screenshot of the Welcome screen.

2. **Install extensions** — Install Live Server, Prettier, Auto Rename Tag, and Material Icon Theme. Restart VS Code.

3. **Open the terminal** — Press `` Ctrl+` `` to open the integrated terminal. Type `pwd` (Mac/Linux) or `cd` (Windows) to see your current directory.

4. **Create a project folder** — Using only the terminal, create this structure:
   ```
   hello-world/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   └── img/
   ```

5. **Open the folder in VS Code** — Go to File → Open Folder and select your `hello-world` folder. You should see the folder tree in the sidebar.

6. **Write "Hello World"** — Open `index.html` and type `!` then press `Tab` (Emmet shortcut). This generates an HTML boilerplate. Change the title to "Hello World" and add `<h1>Hello World!</h1>` inside the body.

7. **Launch Live Server** — Right-click `index.html` and select "Open with Live Server". Your browser should open and display "Hello World!".

---

## 🧠 Knowledge Check

1. What keyboard shortcut opens the terminal in VS Code?
2. What does the `mkdir` command do?
3. Why is it important to organise your project into folders like `css/`, `js/`, and `img/`?

---

## 💪 Challenge

Create a complete project folder structure for a portfolio website using **only the terminal** (no clicking). The structure should be:

```
my-portfolio/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── profile/
│   └── projects/
└── README.md
```

Bonus: Open the folder in VS Code and add an HTML boilerplate to each `.html` file.

---

## 📚 Resources

- 📖 [VS Code Official Docs — Getting Started](https://code.visualstudio.com/docs) — Everything about VS Code
- 🎥 [VS Code Tutorial for Beginners — freeCodeCamp](https://www.youtube.com/watch?v=WPqXP_kLzpo) — Full video walkthrough
- 📖 [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) — MDN's terminal guide
- 📖 [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) — Speed up HTML/CSS writing
- 🎥 [Terminal for Beginners — Traversy Media](https://www.youtube.com/watch?v=ogWoUU2DXBU) — Practical terminal tutorial

---

## 🐛 Common Mistakes to Avoid

1. **Not adding VS Code to PATH during installation** — If you skip this, you won't be able to open VS Code from the terminal with `code .`. Reinstall and check the option.
2. **Getting lost in the terminal** — Always use `pwd` (Mac/Linux) or `cd` (Windows) to check where you are. Use `cd ..` to go up and `cd folder-name` to go down. If you're completely lost, close the terminal and open a new one.

---

## 🧭 Navigation

← [Back to Module Overview](../) | [Next Day: Git & GitHub →](../day-02/)
