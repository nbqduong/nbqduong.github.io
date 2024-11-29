import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import Header from "./components/Header"; // Example component
import Footer from "./components/Footer"; // Example component
import Note from "./components/Note"; //

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root using React 18's new API
const root = ReactDOM.createRoot(rootElement);

// Render a test component
root.render(<>
  <Header />
  <Note/>
  <Footer/>
</>);