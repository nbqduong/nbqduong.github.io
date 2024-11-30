import React, { useState, useEffect, useRef } from "react";
import './BlockDisplay.css';

const AppearingBlock = ({ children, className = "", threshold = 0.5 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold } // Trigger when this portion of the element is visible
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [threshold]);
  
    return (
      <div
        ref={elementRef}
        className={`${className} ${isVisible ? "popup" : ""}`}
      >
        {children}
      </div>
    );
  };

export default AppearingBlock;
