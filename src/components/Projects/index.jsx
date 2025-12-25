import "./Projects.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";

const Projects = ({ onNavigate }) => {
    return (
        <section id='project'>
            <div className="project__background">
                <div className="project__orb project__orb--1"></div>
                <div className="project__orb project__orb--2"></div>
                <div className="project__orb project__orb--3"></div>
            </div>
            
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine project__title">Projects</h2>
                </div>
                <div className="projects__container">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            {...project} 
                            key={index} 
                            index={index}
                            onNavigate={onNavigate} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;