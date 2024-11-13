import React from 'react';
import './index.scss'; // Assuming you are using a separate CSS file
import Loader from 'react-loaders';

const About = () => {
  return (
    <>
    <div className="app-container">
        <div className='about-box'>
            About Me
        </div>
        <div className="about-text">
            I'm a high school student with a deep interest in computer science, constantly exploring new skills and technologies to broaden my understanding of the field. My journey into coding has driven me to build hands-on projects and experiment with languages like Python, HTML, CSS, and frameworks like React. I'm passionate about pushing my knowledge further, taking on challenges in web development, and creating applications that solve real-world problems.        </div>
        <div className='about-box'>
            Skills
        </div>
        <div className="about-text">
            I am proficient in Python, React, HTML, and CSS, with each skill forming an integral part of my approach to building intuitive and functional applications. Python allows me to dive deep into back-end development, creating efficient, clean, and scalable code that supports complex functionality. React is my go-to for developing dynamic, interactive user interfaces that feel seamless and engaging. With HTML and CSS, I have a solid grasp of the structure and styling that make websites both visually appealing and user-friendly.<br /><br /> Alongside my computer skills, I've invested over 70 hours in tutoring students, including some with developmental challenges, in basic math and reading. This experience has not only strengthened my communication abilities but also deepened my patience and adaptability in diverse learning environments. Working one-on-one with students at different skill levels has given me a unique perspective on effective problem-solving and engagement, qualities that I bring into all my projects and collaborations.
        </div>

        <div className='about-box'>
            Education
        </div>
        <div className="about-text">
            High School Student.
            Expected to graduate 2026.
        </div>
    </div>
    <Loader type='pacman' />
    </>



  );
};

export default About;
