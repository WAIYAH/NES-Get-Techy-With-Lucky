// ============================================
// 🚀 Day 03 Exercise — Routing & Project Structure
// Module 06: Frontend Mastery
// Get Techy with Lucky
// ============================================

// INSTRUCTIONS:
// Complete these tasks in your existing React project.
// Install React Router first: npm install react-router-dom
//
// Create the files listed below in your project's src/ folder.

// ============================================
// TASK 1: Set Up BrowserRouter
// ============================================
// File: src/App.jsx
//
// Set up routing with at least 3 routes:
//   /         → Home page
//   /about    → About page
//   /contact  → Contact page
//   *         → 404 Not Found page
//
// Starter:
//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // Import your page components here
//
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Add your routes here */}
//       </Routes>
//     </BrowserRouter>
//   );
// }
//
// export default App;


// ============================================
// TASK 2: Create Page Components
// ============================================
// Create these files:
//   src/pages/Home.jsx
//   src/pages/About.jsx
//   src/pages/Contact.jsx
//   src/pages/NotFound.jsx
//
// Each page should have:
// - An <h1> with the page title
// - A short paragraph description
// - Basic styling
//
// Starter for Home.jsx:
//
// function Home() {
//   return (
//     <div>
//       {/* Add your content */}
//     </div>
//   );
// }
//
// export default Home;


// ============================================
// TASK 3: Create a Navbar with Links
// ============================================
// File: src/components/Navbar.jsx
//
// Build a Navbar that:
// - Uses <NavLink> from react-router-dom
// - Highlights the active link
// - Appears on every page (use a layout)
//
// Starter:
//
// import { NavLink } from "react-router-dom";
//
// function Navbar() {
//   return (
//     <nav>
//       {/* Add NavLink elements for Home, About, Contact */}
//     </nav>
//   );
// }
//
// export default Navbar;


// ============================================
// TASK 4: Add a Dynamic Route
// ============================================
// Route: /projects/:projectId
// File: src/pages/ProjectDetail.jsx
//
// - Use useParams() to get the projectId from the URL
// - Display the project ID on the page
// - Add links to /projects/1, /projects/2, etc. from another page
//
// Starter:
//
// import { useParams } from "react-router-dom";
//
// function ProjectDetail() {
//   // Get the projectId from the URL
//
//   return (
//     <div>
//       {/* Display project information */}
//     </div>
//   );
// }
//
// export default ProjectDetail;


// ============================================
// TASK 5: Create a Layout with Outlet
// ============================================
// File: src/layouts/MainLayout.jsx
//
// Build a layout that:
// - Renders the Navbar at the top
// - Uses <Outlet /> for page content
// - Renders a Footer at the bottom
// - Wrap your routes with this layout in App.jsx
//
// Starter:
//
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
//
// function MainLayout() {
//   return (
//     <>
//       {/* Navbar */}
//       <main>
//         {/* Outlet renders child routes here */}
//       </main>
//       {/* Footer */}
//     </>
//   );
// }
//
// export default MainLayout;
