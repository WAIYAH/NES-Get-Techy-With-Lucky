// ============================================
// ✅ Day 03 Solution — Routing & Project Structure
// Module 06: Frontend Mastery
// Get Techy with Lucky
// ============================================

// Below are all the files you need to create.
// Each section shows the file path and complete code.


// ============================================
// FILE: src/App.jsx
// ============================================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// ============================================
// FILE: src/layouts/MainLayout.jsx
// ============================================

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <Outlet />
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solid #eee",
          color: "#666",
        }}
      >
        <p>&copy; 2025 Get Techy with Lucky. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MainLayout;


// ============================================
// FILE: src/components/Navbar.jsx
// ============================================

import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: "1.5rem",
  padding: "1rem 2rem",
  backgroundColor: "#2c3e50",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "normal",
};

const activeLinkStyle = {
  ...linkStyle,
  fontWeight: "bold",
  borderBottom: "2px solid #3498db",
  paddingBottom: "2px",
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;


// ============================================
// FILE: src/pages/Home.jsx
// ============================================

import { Link } from "react-router-dom";

function Home() {
  const projects = [
    { id: 1, title: "Portfolio Website" },
    { id: 2, title: "Weather App" },
    { id: 3, title: "Todo Application" },
  ];

  return (
    <div>
      <h1>Welcome Home</h1>
      <p>This is the home page of our React Router demo.</p>

      <h2 style={{ marginTop: "2rem" }}>Projects</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: "0.5rem" }}>
            <Link to={`/projects/${project.id}`} style={{ color: "#3498db" }}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;


// ============================================
// FILE: src/pages/About.jsx
// ============================================

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Get Techy with Lucky is a tech education platform dedicated to making
        technology accessible to everyone. We believe that anyone can learn to
        code with the right guidance and resources.
      </p>
    </div>
  );
}

export default About;


// ============================================
// FILE: src/pages/Contact.jsx
// ============================================

import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h1>Thank You!</h1>
        <p>Thanks for reaching out, {name}. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            style={{ padding: "0.5rem", width: "100%", fontSize: "1rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            rows={5}
            style={{ padding: "0.5rem", width: "100%", fontSize: "1rem" }}
          />
        </div>
        <button type="submit" style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;


// ============================================
// FILE: src/pages/ProjectDetail.jsx
// ============================================

import { useParams, Link } from "react-router-dom";

const projectData = {
  1: { title: "Portfolio Website", description: "A personal portfolio built with React and CSS Grid." },
  2: { title: "Weather App", description: "Real-time weather data using the OpenWeather API." },
  3: { title: "Todo Application", description: "A full-featured todo app with localStorage persistence." },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div>
        <h1>Project Not Found</h1>
        <p>No project with ID "{projectId}" exists.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Link to="/" style={{ color: "#3498db" }}>← Back to Home</Link>
    </div>
  );
}

export default ProjectDetail;


// ============================================
// FILE: src/pages/NotFound.jsx
// ============================================

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>404</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={{ color: "#3498db", fontSize: "1.1rem" }}>
        ← Go back home
      </Link>
    </div>
  );
}

export default NotFound;
