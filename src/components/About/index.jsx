import Hole from "../../ui/Hole";
import "./About.css";
import { hobbies } from "../../data";
import CardUi from "../../assets/CardUi";



const About = () => {
    return (
        <section id="about">
            <div className="card section__wrapper">
                <Hole />
                <div className="column left-column">
                    <h3 className="skill__title">My Hobbies!</h3>
                    <div className="skills__container">
                        {hobbies.map((skill, index) => (
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
                    Welcome to my digital space! I am  a driven upcoming graduate from the University of Washington with an unwavering curiosity and love for software systems, data science/engineering, and AI. I thrive on learning and solving real-world challenges while sparking innovation through collaboration and continuous growth. As a resilient and goal-oriented team player, I'm committed to building solutions that create a meaningful impact.

                    </h1>
                </div>
            </div>
        </section>
    )
}

export default About;