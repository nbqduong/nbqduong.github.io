//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import Header from "./Header"; // Example component
import Footer from "./Footer"; // Example component
import Note from "./Note"; //

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