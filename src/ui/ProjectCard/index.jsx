import { useNavigate } from 'react-router-dom';
import "./ProjectCard.css";

const ProjectCard = ({ title, category, image, description, stacks, onNavigate }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        const projectId = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        
        if (onNavigate) {
            onNavigate(() => {
                navigate(`/project/${projectId}`);
            });
        } else {
            navigate(`/project/${projectId}`);
        }
    };

    return (
        <div className="card project__card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="project__card-top">
                <div className="picture">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="project__card-bottom">
                <div className="flex project__info">
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h3 className="title">{title}</h3>
                        <p className="text__muted category">{category}</p>
                    </div>
                </div>
                <p className="text__muted description">{description}</p>
                <div className="flex__center stacks">
                    {stacks.map((stack, index) => (
                        <div className="stack" key={index}>
                            <img src={stack.logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>           
    );
};

export default ProjectCard;