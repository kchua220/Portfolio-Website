import { useState } from "react";
import "./About.css";
import { hobbies } from "../../data";

const About = () => {
    const [activeHobby, setActiveHobby] = useState(null);

    return (
        <section id="about">
            <div className="about__background">
                <div className="gradient__orb gradient__orb--1"></div>
                <div className="gradient__orb gradient__orb--2"></div>
                <div className="gradient__orb gradient__orb--3"></div>
            </div>
            
            <div className="about__container">
                {/* Section Title */}
                <div className="about__header">
                    <h1 className="about__title">About Me</h1>
                </div>

                {/* Interactive Content */}
                <div className="about__grid">
                    {/* Main Bio */}
                    <div className="bio__section">
                        <div className="bio__description">
                            <p>
                            Hi! Welcome to my digital space. I am a driven graduate student at Columbia University with an unwavering curiosity and passion for software systems, data science/engineering, and AI. I thrive on learning and solving real-world challenges while sparking innovation through collaboration and continuous growth. As a resilient and goal-oriented team player, I'm committed to building solutions that create a meaningful impact!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;