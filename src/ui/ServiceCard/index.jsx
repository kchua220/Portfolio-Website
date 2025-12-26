import "./ServiceCard.css"

const ServiceCard = ({title, description, description2, courses, course_list, icon, color, colorRGB, index}) => {
    return (
        <div 
            className="service__card" 
            style={{"--color-primary":color, "--color-primary-rgb":colorRGB}}
            data-aos="fade-up"
            data-aos-delay={index * 150}
        >
            {/* Gradient Background */}
            <div className="card__gradient"></div>
            
            {/* Decorative Orbs */}
            <div className="service__card-top">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
            </div>
            
            {/* Content */}
            <div className="service__card-middle">
            <div className="school__badge">
                {icon && (
                icon.type ? 
                <div className="school__icon">{icon}</div> :
                <img src={icon} alt={title} className="school__logo" />
                )}
            </div>
                
                <h2 className="school__title">
                    <span className="g-text">{title}</span>
                </h2>
                
                <div className="school__meta">
                    <p className="school__duration">{description}</p>
                    <p className="school__degree">{description2}</p>
                </div>
                
                {course_list && course_list.length > 0 && (
                    <div className="coursework__section">
                        <h3 className="coursework__title">{courses}</h3>
                        <div className="course__list">
                            {course_list.map((course, idx) => (
                                <span key={idx} className="course__item">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
            {/* Hover Effect Border */}
            <div className="card__border"></div>
        </div>
    )
}

export default ServiceCard;