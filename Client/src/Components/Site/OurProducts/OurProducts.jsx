import React from "react";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./OurProducts.scss";

const OurProducts = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.example.com/products")
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data));
  //   }, []);

  const addToCart = (product) => {
    // Add to cart logic
  };

  const addToWishlist = (product) => {
    // Add to wishlist logic
  };

  const quickView = (product) => {
    // Quick view logic
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
                  {/* {products.slice(0, 4).map((product, index) => ( */}
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <div className="product-item">
                      <div className="product-img">
                        <a
                        // href={`/product/${product.id}`}
                        >
                          <img
                            className="primary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg"
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
                        <a
                          className="product-name"
                          // href={`/product/${product.id}`}
                          href="!#"
                        >
                          {/* {product.name} */}
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$34.24</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            {/* {[...Array(product.rating)].map((_, i) => (
                                <li key={i}>
                                  <i class="fa-solid fa-star"></i>
                                </li>
                              ))} */}
                            <li>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                  {/* Add more products here */}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-item-wrap row">
                  {/* {products.slice(0, 4).map((product, index) => ( */}
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <div className="product-item">
                      <div className="product-img">
                        <a
                        // href={`/product/${product.id}`}
                        >
                          <img
                            className="primary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg"
                            alt="Product Images"
                          />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li >
                              <button>
                                <i class="fa-regular fa-heart pe-7s-like"></i>
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
                        <a
                          className="product-name"
                          // href={`/product/${product.id}`}
                          href="!#"
                        >
                          {/* {product.name} */}
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$34.24</span>
                        </div>
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
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                  {/* Add more products here */}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="product-item-wrap row">
                  {/* {products.slice(0, 4).map((product, index) => ( */}
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <div className="product-item">
                      <div className="product-img">
                        <a
                        // href={`/product/${product.id}`}
                        >
                          <img
                            className="primary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg"
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
                        <a
                          className="product-name"
                          // href={`/product/${product.id}`}
                          href="!#"
                        >
                          {/* {product.name} */}
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$34.24</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            {/* {[...Array(product.rating)].map((_, i) => (
                                <li key={i}>
                                  <i class="fa-solid fa-star"></i>
                                </li>
                              ))} */}
                            <li>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ))} */}
                  {/* Add more products here */}
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
