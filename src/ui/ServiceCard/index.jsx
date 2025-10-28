
import "./ServiceCard.css"


const ServiceCard = ({title,description, description2, courses, course_list, icon, color, colorRGB}) => {
    return (
        <div className="blur__overlay flex service__card" style={{"--color-primary":color, "--color-primary-rgb":colorRGB}}>
            <div className="service__card-top">
                <div className="blur__overlay ball ball1"></div>
                <div className="blur__overlay ball ball2"></div>
                <div className="blur__overlay ball ball3"></div>
                <div className="blur__overlay ball ball4"></div>
              
            </div>
            <div className="service__card-middle">
                <h2 className="title">
                    <span className="g-text">{title}</span>
                </h2>
                <h3 className="text__muted discription">{description}</h3>
                <br />
                <h4 className="discription2">{description2}</h4>
                <br />
                <h3 className="courses">{courses}</h3>
                <h3 className="course_list">
                {course_list.map((course, index) => (
                    <span key={index}>
                        {course}
                    <br />
                    </span>
                    ))}
                </h3>
                
            </div>
            
        </div>
    )
}

export default ServiceCard;