import "./Projects.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";

const Projects = ({ onNavigate }) => {
    return (
        <section id='project'>
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine">Projects</h2>
                </div>
                <div className="projects__container">
                    {projects.map((project, index) => (
                        <ProjectCard {...project} key={index} onNavigate={onNavigate} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;