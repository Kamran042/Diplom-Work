import React, { useEffect, useState, useRef } from "react";
import "./SaleSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from "axios";

const SaleSlider = () => {
  const [slides, setSlides] = useState([]);
  const swiperRef = useRef(null); // Создаем референс для Swiper

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/diplomWork/salesliders"
      );
      setSlides(response.data);
      console.log("Slides fetched:", response.data);

      // Явно обновляем Swiper после получения данных
      if (swiperRef.current) {
        swiperRef.current.swiper.update();
      }
    } catch (error) {
      console.error("Error fetching slides:", error);
    }
  };

  return (
    <Swiper
      ref={swiperRef} // Передаем референс на Swiper
      loop
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 2500,
      }}
      nextButton={
        <div className="swiper-button-next">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      }
      prevButton={
        <div className="swiper-button-prev">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      }
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="slide-inner style-1 bg-height slider__bg"
            style={{
              backgroundImage: `url(https://htmldemo.net/pronia/pronia/assets/images/slider/bg/1-1.jpg)`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                  <div className="slide-content text-black">
                    <span className="offer">{slide.salepercentage} % Off</span>
                    <h2 className="title">{slide.title}</h2>
                    <p className="short-desc">{slide.shortDesc}</p>
                    <div className="btn-wrap">
                      <a
                        className="btn btn-custom-size xl-size btn-pronia-primary"
                        href="shop.html"
                      >
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                  <div className="inner-img">
                    <img
                      src={`http://localhost:8080/${slide.innerImage}`}
                      alt="Inner Img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SaleSlider;
