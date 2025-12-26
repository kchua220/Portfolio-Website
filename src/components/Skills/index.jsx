import "./Skills.css";
import { skills } from "../../data"

const Skills = () => {
    return (
        <section id='skill'>
            <div className="skill__background">
                <div className="skill__orb skill__orb--1"></div>
                <div className="skill__orb skill__orb--2"></div>
                <div className="skill__orb skill__orb--3"></div>
            </div>

            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine skill__title" data-aos="fade-down">Skills</h2>
                </div>
                <div className="skill__container">
                    {/* Render all skills as individual bubbles */}
                    {skills.map((category) => 
                        category.data.map((skill, index) => (
                            <div 
                                className="skill__details" 
                                key={`${category.title}-${index}`}
                                data-aos="zoom-in"
                                data-aos-delay={index * 50}
                            >
                                <div className="skill__logo">
                                    <img src={skill.logo} alt={skill.skill} />
                                </div>
                                <h4 className="skill__name">{skill.skill}</h4>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default Skills;