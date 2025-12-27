import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from '../../data';
import './ProjectPage.css';

const ProjectPage = ({ onNavigate }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const project = projects.find((p) => 
    p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === projectId
  );

  // Scroll handler to hide/show GitHub button
  useEffect(() => {
    const overlay = document.querySelector('.project-page-overlay');
    
    const handleScroll = () => {
      const currentScrollY = overlay.scrollTop;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (overlay) {
      overlay.addEventListener('scroll', handleScroll);
      return () => overlay.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  if (!project) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white',
        fontSize: '24px'
      }}>
        Project not found
      </div>
    );
  }

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  return (
    <>
      {/* GitHub button - outside overlay so fixed position works */}
      {project.demoLink && (
        <div className={`project-links ${showButton ? 'visible' : 'hidden'}`}>
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="demo-link"
          >
            View on GitHub →
          </a>
        </div>
      )}

      <div className="project-page-overlay">
        <button className="back-button" onClick={handleBack}>
          <span>←</span> Back
        </button>
      
      <div className="project-card-popup">
        <div className="project-header">
          <img src={project.image} alt={project.title} className="project-image" />
        </div>

        <div className="project-title-section">
          <h1>{project.title}</h1>
          <p className="category-badge">{project.category}</p>
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>About This Project</h2>
            <p>{project.description}</p>
          </div>

          <div className="tech-stack-section">
            <h2>Tech Stack</h2>
            <div className="tech-stack-grid">
              {project.stacks.map((stack, index) => (
                <div className="tech-item" key={index}>
                  <img src={stack.logo} alt={stack.name} />
                  <span>{stack.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectPage;