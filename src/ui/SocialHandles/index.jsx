import "./SocialHandles.css";
import { socialHandles } from "../../data";

const SocialHandles = () => {
    return (
        <div className="social__handles__container"> 
             {socialHandles.map((media, index) => (
                <a 
                    href={media.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon_container social__handle"
                    key={index}
                >
                    <span className="flex__center tooltip">
                        {media.name}
                    </span>
                    {media.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialHandles;