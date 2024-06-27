import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detail.scss";
import MainContext from "../../../Context/Context";

function Detail() {
  const { wishlist, setWishlist, products } = useContext(MainContext);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistForDiplomWork"));
    const isInLocalStorage = storedWishlist && storedWishlist.some((item) => item._id === id);
    
    setIsInWishlist(isInLocalStorage);
  }, [id]);

  const item = products.find((product) => product._id === id);

  const handleAddToWishlist = () => {
    if (item) {
      const isAlreadyInWishlist = wishlist.some((item) => item._id === id);

      let updatedWishlist;
      if (!isAlreadyInWishlist) {
        updatedWishlist = [...wishlist, item];
        setIsInWishlist(true);
      } else {
        updatedWishlist = wishlist.filter((item) => item._id !== id);
        setIsInWishlist(false);
      }

      setWishlist(updatedWishlist);
      localStorage.setItem(
        "wishlistForDiplomWork",
        JSON.stringify(updatedWishlist)
      );

    }
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };



  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: `url("https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg")`,
          backgroundColor: "#ffffff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">SINGLE PRODUCT</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Single Product variable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {item && (
        <div className="single-product-area section-space-top-100 section-space-bottom-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-product-img">
                  <div className="swiper-container single-product-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a
                          href="assets/images/product/large-size/1-2-570x633.jpg"
                          className="single-img gallery-popup"
                        >
                          <img
                            src={`http://localhost:8080/${item.image1}`}
                            alt="Product Imagee"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <div className="single-product-content">
                  <h2 className="title">{item.title}</h2>
                  <div className="price-box">
                    <span className="new-price">${item.price}</span>
                  </div>
                  <div className="rating-box-wrap">
                    <div className="rating-box">
                      <ul>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                    <div className="review-status">
                      <a href="!#">( 1 Review )</a>
                    </div>
                  </div>
                  <p className="short-desc">{item.desc}</p>
                  <ul className="quantity-with-btn">
                    <li className="quantity">
                      <div className="cart-plus-minus">
                        <div
                          className="dec qtybutton"
                          onClick={decreaseQuantity}
                        >
                          <i className="fa fa-minus" />
                        </div>
                        <input
                          className="cart-plus-minus-box"
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                        />
                        <div
                          className="inc qtybutton"
                          onClick={increaseQuantity}
                        >
                          <i className="fa fa-plus" />
                        </div>
                      </div>
                    </li>
                    <li className="add-to-cart">
                      <button className="btn btn-custom-size lg-size btn-pronia-primary">
                        Add to cart
                      </button>
                    </li>
                    <li className="wishlist-btn-wrap">
                      <a
                        className="custom-circle-btn"
                        onClick={handleAddToWishlist}
                      >
                        <i
                          className={`fa-solid fa-heart ${
                            isInWishlist ? "wishlist-active" : ""
                          }`}
                        />
                      </a>
                    </li>
                  </ul>
                  <ul className="service-item-wrap">
                    <li className="service-item">
                      <div className="service-img">
                        <img
                          src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/car.png"
                          alt="Shipping Icon"
                        />
                      </div>
                      <div className="service-content">
                        <span className="title">
                          Free <br /> Shipping
                        </span>
                      </div>
                    </li>
                    <li className="service-item">
                      <div className="service-img">
                        <img
                          src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/card.png"
                          alt="Shipping Icon"
                        />
                      </div>
                      <div className="service-content">
                        <span className="title">
                          Safe <br /> Payment
                        </span>
                      </div>
                    </li>
                    <li className="service-item">
                      <div className="service-img">
                        <img
                          src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/service.png"
                          alt="Shipping Icon"
                        />
                      </div>
                      <div className="service-content">
                        <span className="title">
                          Safe <br /> Payment
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="product-category">
                    <span className="title">SKU:</span>
                    <ul>
                      <li>
                        <a href="!#">Ch-256xl</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-category">
                    <span className="title">Categories :</span>
                    <ul>
                      <li>
                        <a href="!#">Office,</a>
                      </li>
                      <li>
                        <a href="!#">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-category product-tags">
                    <span className="title">Tags :</span>
                    <ul>
                      <li>
                        <a href="!#">Furniture</a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-category social-link align-items-center pb-0">
                    <span className="title pe-3">Share:</span>
                    <ul>
                      <li>
                        <a
                          href="!#"
                          data-tippy="Pinterest"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i className="fa-brands fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          data-tippy="Twitter"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          data-tippy="Tumblr"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i className="fa-brands fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="!#"
                          data-tippy="Dribbble"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        >
                          <i className="fa-brands fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
