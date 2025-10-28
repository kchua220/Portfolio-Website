
import "./Services.css";
import {services} from "../../data";
import ServiceCard from "../../ui/ServiceCard";

const Services = () => {
    return (
        <section id='education'>
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine">Educations</h2>
                </div>
                <div className="services__group">
                    {services.map(
                        ({title,description, description2, courses, course_list = [], icon, color, colorRGB},index)=>(
                    <ServiceCard 
                    title={title}
                    description={description}
                    description2={description2}
                    courses={courses}
                    course_list={course_list}
                    icon={icon}
                    color={color}
                    colorRGB={colorRGB}
                    key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;