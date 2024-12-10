import React, { useState, useEffect } from 'react';
import './AffectDisplayText.css'

const TextByTextDisplay = ({ text, delay = 500, pauseDelay = 10000 }) => {
    const [visibleText, setVisibleText] = useState(' ');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [cursorClass, setCursorClass] = useState(''); // Manage cursor class for blinking


    //append special characters to trick display
    text = '\u200B' + text;

    useEffect(() => {
        let currentIndex = 0;
    
        const intervalId = setInterval(() => {
          if (currentIndex < text.length) {
            setVisibleText(text.slice(0, currentIndex+1)); // Add one character each time
            setCursorVisible(true);
            setCursorClass('');
            currentIndex++;
            if(currentIndex == text.length){setCursorClass('blinking');};
          } else {
            
          }
        }, delay);
    
        return () => clearInterval(intervalId); // Cleanup interval on unmount
      }, [text, 0]);
    
      return <p>
                {visibleText}
                <span className={`cursor ${cursorClass}`}>|</span> {/* Add cursor with dynamic blinking class */}
            </p>;
};

export default TextByTextDisplay;
