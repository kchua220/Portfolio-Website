import Hole from "../../ui/Hole";
import "./About.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";



const About = () => {
    return (
        <section id="about">
            <div className="card section__wrapper">
                <Hole />
                <div className="column left-column">
                    <h3 className="skill__title">My Hobbies</h3>
                    <div className="skills__container">
                        {skills.map((skill, index) => (
                            <div className = "flex skill__group" key={index}>
                                {skill.data.map((list,key)=> (
                                    <div className="blur__overlay flex__center skill" key={key}>
                                        <div className="skill__logo">
                                            <img src={list.logo} alt="" />
                                        </div>
                                    </div>
                                ))}
                        </div>
                     ))}
                    </div>
                    <CardUi className="card__ui-item" color={"var(--color-primary)"} />
                </div>
                <div className="column right-column">
                    <h2 className="shine"> About Me </h2>
                    <h1 className="title">
                        I am <span className = "yay"> He-Chun (Kevin) Chuang</span>
                    </h1>
                    <h1 className="text__muted description">
                    Welcome to my digital space! I am a driven and passionate junior at the University of Washington with an unwavering curiosity and love for Machine Learning, data analytics, and software engineering. I thrive on solving real-world challenges and sparking innovation while embracing collaboration and growth as a resilient, goal-oriented leader who is all about leveraging technology for meaningful impact! Feel free to connect with me!
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default About;