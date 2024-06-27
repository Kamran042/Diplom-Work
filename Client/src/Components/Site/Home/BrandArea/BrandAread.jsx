import React from 'react';
import SwiperCore, { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "./BrandArea.scss"

const brands = [
  { id: 1, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-1.png', alt: 'Brand Image' },
  { id: 2, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-2.png', alt: 'Brand Image' },
  { id: 3, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-3.png', alt: 'Brand Image' },
  { id: 4, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-4.png', alt: 'Brand Image' },
  { id: 5, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-5.png', alt: 'Brand Image' },
  { id: 6, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-5.png', alt: 'Brand Image' },
  { id: 7, image: 'https://htmldemo.net/pronia/pronia/assets/images/brand/1-5.png', alt: 'Brand Image' },
];

const BrandAread = () => {
  return (
    <div className="brand-area section-space-bottom-100">
      <div className="container">
        <div
          className="brand-bg"
          data-bg-image="assets/images/brand/bg/1-1170x300.jpg"
          style={{ backgroundImage: `url('https://htmldemo.net/pronia/pronia/assets/images/brand/bg/1-1170x300.jpg')` }}
        >
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              >
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id} className="brand-item">
                    <a href="!#">
                      <img src={brand.image} alt={brand.alt} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BrandAread