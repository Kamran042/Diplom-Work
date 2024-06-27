import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainContext from "../../../../Context/Context";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const { products, wishlist, setWishlist, basket, setBasket, toggleMiniCart } =
    useContext(MainContext);

  const addToCart = (product, e) => {
    const isAlreadyInBasket = basket.some((x) => x._id === product._id);

    let updatedBasket;
    if (!isAlreadyInBasket) {
      updatedBasket = [...basket, { ...product, count: 1 }];
    } else {
      updatedBasket = basket.map((x) =>
        x._id === product._id ? { ...x, count: x.count + 1 } : x
      );
    }

    setBasket(updatedBasket);
    localStorage.setItem("basketForDiplomWork", JSON.stringify(updatedBasket));
    toggleMiniCart(e);
  };

  const addToWishlist = (item) => {
    if (item) {
      const isAlreadyInWishlist = wishlist.some((x) => x._id === item._id);

      let updatedWishlist;
      if (!isAlreadyInWishlist) {
        updatedWishlist = [...wishlist, item];
      } else {
        updatedWishlist = wishlist.filter((x) => x._id !== item._id);
      }

      setWishlist(updatedWishlist);
      localStorage.setItem(
        "wishlistForDiplomWork",
        JSON.stringify(updatedWishlist)
      );
    }
  };

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
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="product-slider swiper-container"
            >
              {products.map((product, index) => (
                <SwiperSlide key={index} className="product-item swiper-slide">
                  <div className="product-img">
                    <Link to={`detail/${product._id}`}>
                      <img
                        className="primary-img"
                        src={`http://localhost:8080/${product.image1}`}
                        alt="Product Images"
                      />
                      <img
                        className="secondary-img"
                        src={`http://localhost:8080/${product.image2}`}
                        alt="Product Images"
                      />
                    </Link>
                    <div className="product-add-action">
                      <ul>
                        <li>
                          <button onClick={() => addToWishlist(product)}>
                            <i
                              className={`fa-solid fa-heart ${
                                wishlist.find((x) => x._id === product._id)
                                  ? "wishlist-active"
                                  : ""
                              }`}
                            />
                          </button>
                        </li>
                        <li>
                          <button>
                            <Link
                              className="ninanadyadya"
                              to={`detail/${product._id}`}
                            >
                              <i className="pe-7s-look"></i>
                            </Link>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={(e) => {
                              addToCart(product, e);
                            }}
                          >
                            <i class="pe-7s-cart"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <Link className="product-name" to={`detail/${product._id}`}>
                      {product.title}
                    </Link>
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
