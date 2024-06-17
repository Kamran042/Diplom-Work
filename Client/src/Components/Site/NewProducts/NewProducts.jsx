import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewProducts = () => {
  const products = [
    {
      id: 1,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 2,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 3,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 4,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 5,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 6,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 7,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
    {
      id: 8,
      name: "American Marigold",
      price: 23.45,
      image1:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
      image2:
        "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
    },
  ];

  return (
    <div className="product-area section-space-top-100">
      <div className="container">
        <div className="row">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title">New Products</h2>
            <p className="section-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
          </div>
          <div className="col-lg-12">
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="product-slider swiper-container"
              slidesPerView={4}
            >
              {products.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="product-item swiper-slide"
                >
                  <div className="product-img">
                    <a href="shop.html">
                      <img
                        className="primary-img"
                        src={product.image1}
                        alt="Product Images"
                      />
                      <img
                        className="secondary-img"
                        src={product.image2}
                        alt="Product Images"
                      />
                    </a>
                    <div className="product-add-action">
                          <ul>
                            <li>
                              <button>
                                <i class="fa-regular fa-heart"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa-regular fa-eye"></i>
                              </button>
                            </li>
                            <li>
                              <button>
                                <i class="fa-solid fa-cart-shopping"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                  </div>
                  <div className="product-content">
                    <a className="product-name" href="shop.html">
                      {product.name}
                    </a>
                    <div className="price-box pb-1">
                      <span className="new-price">${product.price}</span>
                    </div>
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
