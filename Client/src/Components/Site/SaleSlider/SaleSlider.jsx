import React from "react";
import "./SaleSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const SaleSlider = () => {
  const slides = [
    {
      id: 1,
      bgImage:
        "https://htmldemo.net/pronia/pronia/assets/images/slider/bg/1-1.jpg",
      innerImage:
        "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png",
      title: "New Plant",
      offer: "65% Off",
      shortDesc: "Pronia, With 100% Natural, Organic & Plant Shop.",
    },
    {
      id: 2,
      bgImage:
        "https://htmldemo.net/pronia/pronia/assets/images/slider/bg/1-1.jpg",
      innerImage:
        "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png",
      title: "New Plant",
      offer: "65% Off",
      shortDesc: "Pronia, With 100% Natural, Organic & Plant Shop.",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      nextButton={
        <div className="swiper-button-next">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      }
      prevButton={
        <div className="swiper-button-prev">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
      }
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="slide-inner style-1 bg-height slider__bg"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                  <div className="slide-content text-black">
                    <span className="offer">{slide.offer}</span>
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
                    <img src={slide.innerImage} alt="Inner Image" />
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
