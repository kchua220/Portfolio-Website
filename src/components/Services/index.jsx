import "./Services.css";
import {services} from "../../data";
import ServiceCard from "../../ui/ServiceCard";

const Services = () => {
    return (
        <section id='education'>
            <div className="education__background">
                <div className="education__orb education__orb--1"></div>
                <div className="education__orb education__orb--2"></div>
                <div className="education__orb education__orb--3"></div>
            </div>
            
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine education__title">Education</h2>
                </div>
                
                <div className="services__group">
                    {services.map(
                        ({title, description, description2, courses, course_list = [], icon, color, colorRGB}, index) => (
                            <ServiceCard 
                                title={title}
                                description={description}
                                description2={description2}
                                courses={courses}
                                course_list={course_list}
                                icon={icon}
                                color={color}
                                colorRGB={colorRGB}
                                key={index}
                                index={index}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services;