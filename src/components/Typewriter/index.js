import React, { useState, useEffect } from 'react';
import './index.scss';

const Typewriter = () => {
    const texts = ["Student", "Web Developer", "Python Expert", "Innovator", "Tutor", "Researcher", "Programmer"];
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let typingSpeed = 100;

        if (isDeleting) {
            typingSpeed = 50;
        }

        const type = () => {
            if (!isDeleting && charIndex < currentText.length) {
                setDisplayedText((prev) => prev + currentText[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayedText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause at end of each phrase
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length); // Move to the next phrase
            }
        };

        const typingTimer = setTimeout(type, typingSpeed);
        return () => clearTimeout(typingTimer);
    }, [charIndex, isDeleting, textIndex, texts]);

    return (
        <div className="typewriter-container">
            {displayedText || "\u00A0"}
        </div>
    );
};

export default Typewriter;