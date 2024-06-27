import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./ClientSay.scss";
import axios from "axios";
import toast from "react-hot-toast";



const ClientSay = () => {
  SwiperCore.use([Pagination, Autoplay]);
  const [testimonials , setTestimonials] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/diplomWork/commentslider");
      setTestimonials(response.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [setTestimonials]);




  return (
    <div className="testimonial-area section-space-top-90 section-space-bottom-95">
      <div className="container-fluid">
        <div
          className="testimonial-bg"
          data-bg-image="https://htmldemo.net/pronia/pronia/assets/images/testimonial/bg/1-1-1820x443.jpg"
        >
          <div className="section-title-wrap">
            <h2 className="section-title">What Say Client</h2>
            <p className="section-desc mb-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>
        </div>
        <div className="container custom-space mb-5">
          <Swiper
            loop
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            className="testimonial-slider with-bg"
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial,index) => (
              <SwiperSlide key={index} className="testimonial-item">
                <div className="user-info mb-3">
                  <div className="user-shape-wrap">
                    <div className="user-img">
                      <img src={`http://localhost:8080/${testimonial.image}`} alt={testimonial.title} />
                    </div>
                  </div>
                  <div className="user-content text-charcoal">
                    <h4 className="user-name mb-1">{testimonial.title}</h4>
                    <span className="user-occupation">
                      {testimonial.occupation}
                    </span>
                  </div>
                </div>
                <p className="user-comment mb-6">{testimonial.comment}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientSay;
