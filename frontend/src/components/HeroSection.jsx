import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const HeroSection = () => {
  const staticHeading = "Take Control of Your Finances, One Step at a Time";

  const messages = [
    "Track your income with precision.",
    "Analyse your expenses effortlessly.",
    "Plan smarter, live better — with FinWise.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLine, setDisplayedLine] = useState(messages[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutDuration = 1000;
    const delayBetweenLines = 3000;

    const timeout = setTimeout(() => {
      setIsVisible(false); // fade out

      setTimeout(() => {
        // Change text after fade out
        setDisplayedLine(messages[(currentIndex + 1) % messages.length]);
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true); // fade in
      }, fadeOutDuration);
    }, delayBetweenLines);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="hero-section">
      <h1 className="hero-title">{staticHeading}</h1>
      <p className={`hero-subtitle ${isVisible ? "fade-in" : "fade-out"}`}>
        {displayedLine}
      </p>
    </div>
  );
};

export default HeroSection;
