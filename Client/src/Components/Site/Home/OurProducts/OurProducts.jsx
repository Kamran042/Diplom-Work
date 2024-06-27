import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./OurProducts.scss";
import MainContext from "../../../../Context/Context";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const { products, wishlist, setWishlist, basket, setBasket ,  toggleMiniCart} =
    useContext(MainContext);

  const featuredProducts = products
    .filter((product) => product.category === "Featured")
    .slice(0, 9);
  const bestsellerProducts = products
    .filter((product) => product.category === "Bestseller")
    .slice(0, 9);
  const latestProducts = products
    .filter((product) => product.category === "Latest")
    .slice(0, 9);

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
      toggleMiniCart(e)
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

  const renderProductCards = (products) => {
    return products.map((product, index) => (
      <div key={index} className="col-xl-3 col-md-4 col-sm-6">
        <div className="product-item">
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
                    <Link className="ninanadyadya" to={`detail/${product._id}`}>
                      <i className="pe-7s-look"></i>
                    </Link>
                  </button>
                </li>
                <li>
                <button onClick={(e) => addToCart(product, e)
                }>
                  <i className="pe-7s-cart"></i>
                </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <a className="product-name " href={`#/product/${product.id}`}>
              {product.title}
            </a>
            <div className="price-box pb-1">
              <span className="new-price">${product.price}</span>
            </div>
            <div className="rating-box">
              <ul>
                <li>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="product-area section-space-top-100">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title mb-0">Our Products</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            <Tabs className="product-tab-nav tab-style-1 ">
              <TabList className="nav d-flex justify-content-center">
                <Tab>
                  <li class="nav-item" role="presentation">
                    <a
                      class="active"
                      id="featured-tab"
                      data-bs-toggle="tab"
                      href="#featured"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="true"
                    >
                      Featured
                    </a>
                  </li>
                </Tab>
                <Tab>
                  <li class="nav-item" role="presentation">
                    <a
                      id="bestseller-tab"
                      data-bs-toggle="tab"
                      href="#bestseller"
                      role="tab"
                      aria-controls="bestseller"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Bestseller
                    </a>
                  </li>
                </Tab>
                <Tab>
                  <li class="nav-item" role="presentation">
                    <a
                      id="latest-tab"
                      data-bs-toggle="tab"
                      href="#latest"
                      role="tab"
                      aria-controls="latest"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Latest
                    </a>
                  </li>
                </Tab>
              </TabList>
              <TabPanel>
                <div className="product-item-wrap row">
                  {renderProductCards(featuredProducts)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-item-wrap row">
                  {renderProductCards(bestsellerProducts)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-item-wrap row">
                  {renderProductCards(latestProducts)}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
