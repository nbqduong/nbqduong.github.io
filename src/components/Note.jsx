import React, { useState } from "react";

function Note(){
    const [isHovered, setIsHovered] = useState(false);

    const linkStyle = {
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1.2em",  // Make the link text larger
    };

    const hoverStyle = {
    ...linkStyle,
    color: "#FF5733",  // Color change on hover
    transform: "scale(1.1)",  // Slight zoom effect
    textDecoration: "underline",  // Underline effect
    };

    return (
        <a  href="https://nbqduong.github.io/aaa/" 
            style={isHovered ? hoverStyle : linkStyle}
            onMouseEnter={() => setIsHovered(true)}  // When mouse enters
            onMouseLeave={() => setIsHovered(false)}  // When mouse leaves
        >
        <div className = "note">
            <h1>Test project</h1>
            <p>This is my other website</p>
            
            
            <img
        src="/src/assets/images.jpg"
        alt="Example"
        className="hover-image"
      />
            
        </div>
        </a>
    );
};

export default Note;