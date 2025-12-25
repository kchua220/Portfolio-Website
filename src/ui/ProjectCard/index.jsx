import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, image, category, description, demoLink, stacks, index }) => {
    const navigate = useNavigate();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const handleClick = () => {
        const projectId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        navigate(`/project/${projectId}`);
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div 
            className="project__card" 
            onClick={handleClick}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <div 
                className="project__spotlight"
                style={{
                    background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(102, 126, 234, 0.15), transparent 80%)`
                }}
            ></div>

            {/* Animated Background Particles */}
            <div className="project__particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
            </div>
            
            {/* Image Section with Parallax */}
            <div className="project__image-container">
                <div className="image__shine"></div>
                <img src={image} alt={title} className="project__image" />
                <div className="project__overlay">
                    <div className="overlay__content">
                        <span className="view__project">
                            <span className="view__icon">⚡</span>
                            View Project
                            <span className="view__arrow">→</span>
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="project__content">
            <div className="project__header">
                <h3 className="project__name">
                    {title}
                    <span className="title__glow"></span>
                </h3>
            </div>
                        
                {/* Tech Stack with Glow */}
                <div className="project__tech-section">
                    <div className="project__tech-preview">
                        {stacks.slice(0, 5).map((stack, idx) => (
                            <div 
                                key={idx} 
                                className="tech__badge"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <img src={stack.logo} alt={stack.name} />
                                <span className="tech__tooltip">{stack.name}</span>
                            </div>
                        ))}
                        {stacks.length > 5 && (
                            <div className="tech__badge tech__more">
                                +{stacks.length - 5}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Animated Border */}
            <div className="project__border"></div>
            
            {/* Futuristic Scanlines */}
            <div className="scanline scanline--horizontal"></div>
            <div className="scanline scanline--vertical"></div>
        </div>
    );
};

export default ProjectCard;