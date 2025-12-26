import "swiper/css"
import "./Testimonials.css";
import { useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import { testimonials } from "../../data";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleDotClick = (index) => {
        if (swiperInstance) {
            swiperInstance.slideToLoop(index);
        }
    };

    return (
        <section id='experience'>
            <div className="experience__background">
                <div className="experience__orb experience__orb--1"></div>
                <div className="experience__orb experience__orb--2"></div>
            </div>

            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine experience__title" data-aos="fade-down">Experience</h2>
                </div>

                {/* Timeline */}
                <div className="timeline" data-aos="fade-up" data-aos-delay="200">
                    <div className="timeline__line"></div>
                    <div 
                        className="timeline__progress" 
                        style={{ 
                            width: `${(activeIndex / (testimonials.length - 1)) * 100}%`
                        }}
                    ></div>
                    
                    <div className="timeline__dots">
                        {testimonials.map((exp, index) => {
                            return (
                                <div 
                                    key={index} 
                                    className={`timeline__dot ${activeIndex === index ? 'timeline__dot--active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                >
                                    <div className="dot__inner"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience Cards Slider */}
                <div data-aos="fade-up" data-aos-delay="400">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        speed={1000}
                        loop={true}
                        breakpoints={{700:{slidesPerView:2}}}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {testimonials.map(({avatar, name, review, description, location}, index) => (
                            <SwiperSlide className="experience__card" key={index}>
                                <div className="card__glow"></div>
                                
                                <div className="card__header">
                                    <div className="avatar">
                                        <img src={avatar} alt={name} />
                                        <div className="avatar__ring"></div>
                                    </div>
                                    <div className="company__badge">
                                        <span className="badge__dot"></span>
                                        <span className="badge__text">{name}</span>
                                    </div>
                                </div>

                                <div className="card__content">
                                    <h3 className="role__title">{review}</h3>
                                    <p className="role__duration">{description}</p>
                                    <div className="location__tag">
                                        <span className="location__icon">📍</span>
                                        <span className="location__text">{location}</span>
                                    </div>
                                </div>

                                <div className="card__border"></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;