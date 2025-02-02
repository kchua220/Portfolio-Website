import { useState, useEffect } from "react";
import "odometer/themes/odometer-theme-default.css"
import "./Facts.css";
import Odometer from 'react-odometerjs';
import { use } from "react";

const Facts = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const [clients, setClients] = useState(0);
    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setExperience(10);
            setProjects(150);
            setClients(2.5);
        },3000)

        return () => clearTimeout(timeoutID);
    }, [])
    
        return (
        <div className='flex__center fact_container'>
            <div className="fact__item">
                <div className ="flex__center">
                    <Odometer value={experience} className="title" />
                    <h3 className="title">+</h3>
                </div>
                <p className="label">Years of Experience</p>
            </div>

            <div className="fact__item">
                <div className ="flex__center">
                    <Odometer value={projects} className="title" />
                    <h3 className="title">+</h3>
                </div>
                <p className="label">Completed Projects</p>
            </div> 
 
            <div className="fact__item">
                <div className ="flex__center">
                    <Odometer value={clients} className="title" />
                    <h3 className="title">K</h3>
                </div>
                <p className="label">Satisfied Clients</p>
            </div>
        </div>
    )
}

export default Facts;