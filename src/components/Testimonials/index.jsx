import "swiper/css"
import "./Testimonials.css";
import {Swiper, SwiperSlide} from "swiper/react"
import { testimonials } from "../../data";
import { Autoplay } from "swiper/modules";


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <div className="section__wrapper">
                <div className="section__header">
                    <h2 className="shine">Certificates/Awards</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}
                    modules={[Autoplay]}
                    speed={3000}
                    loop={true}
                    breakpoints={{700:{slidesPerView:2}}}
                    >

                    {testimonials.map(({avatar, name, review},index)=>(
                        <SwiperSlide className="card testimonial" key={index}>
                          <div className="avatar">
                            <img src={avatar} alt="" />
                         </div>
                         <h3 className="name">{name}</h3>
                         <p className="text__muted review">{review}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials;