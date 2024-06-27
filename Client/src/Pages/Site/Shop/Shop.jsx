import React, { useContext, useState } from "react";
import "./Shop.scss";
import { Link } from "react-router-dom";
import MainContext from "../../../Context/Context";

const Shop = () => {
  const { products, wishlist, setWishlist, basket, setBasket, toggleMiniCart } =
    useContext(MainContext);

  const [activeView, setActiveView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleViewChange = (view) => {
    setActiveView(view);
    
  };

  const handlePageChange = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    window.scrollTo({ top: 0, behavior: 'smooth' });;
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const sortProducts = (sortType, products) => {
    let sortedProducts = [...products];
    switch (sortType) {
      case "highPrice":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "lowPrice":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "nameAZ":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameZA":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const filterProducts = (products) => {
    let filteredProducts = products;

    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim() !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts(sortProducts(sortBy, products));
  const renderProducts = () => {
    if (activeView === "grid") {
      return filteredProducts
        .slice(indexOfFirstProduct, indexOfLastProduct)
        .map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <div className="product-item">
              <div className="product-img">
                <Link to={`/product/${product.id}`}>
                  <img
                    className="primary-img"
                    src={`http://localhost:8080/${product.image1}`}
                    alt="Product"
                  />
                  <img
                    className="secondary-img"
                    src={`http://localhost:8080/${product.image2}`}
                    alt="Product"
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
                          to={`/detail/${product._id}`}
                        >
                          <i className="pe-7s-look"></i>
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button onClick={(e) => addToCart(product, e)}>
                        <i className="pe-7s-cart"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <Link to={`/product/${product.id}`} className="product-name">
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
            </div>
          </div>
        ));
    } else {
      return filteredProducts.map((product, index) => (
        <div className="product-item" key={index}>
          <div className="product-img">
            <Link to={`/product/${product.id}`}>
              <img
                className="primary-img"
                src={`http://localhost:8080/${product.image1}`}
                alt="Product"
              />
              <img
                className="secondary-img"
                src={`http://localhost:8080/${product.image2}`}
                alt="Product"
              />
            </Link>
          </div>
          <div className="product-content">
            <Link to={`/product/${product.id}`} className="product-name">
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
            <p className="short-desc mb-0">
              Proin nec ligula dolor. Mauris mollis turpis vitae viverra
              viverra. Mauris at lacus commodo, dictum eros in, interdum diam.
              Sed lorem orci, maximus nec efficitur, mattis sed tortor.
            </p>
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
                  <Link className="ninanadyadya" to={`/detail/${product._id}`}>
                    <i className="pe-7s-look"></i>
                  </Link>
                </li>
                <li>
                  <button onClick={(e) => addToCart(product, e)}>
                    <i className="pe-7s-cart"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ));
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
                <h2 className="breadcrumb-heading">SHOP</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Shop </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-topbar">
                <ul>
                  <li className="page-count">
                    <span>{filteredProducts.length}</span> Product
                    {filteredProducts.length !== 1 ? "s" : ""} Found
                  </li>
                  <li className="product-view-wrap">
                    <ul className="nav" role="tablist">
                      <li className="grid-view" role="presentation">
                        <button
                          id="grid-view-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected={activeView === "grid"}
                          className={activeView === "grid" ? "active" : ""}
                          onClick={() => handleViewChange("grid")}
                        >
                          <i className="fa fa-th"></i>
                        </button>
                      </li>
                      <li className="list-view" role="presentation">
                        <button
                          id="list-view-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-selected={activeView === "list"}
                          className={activeView === "list" ? "active" : ""}
                          onClick={() => handleViewChange("list")}
                        >
                          <i className="fa fa-th-list"></i>
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="short">
                    <select
                      className="nice-select"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="default">Sort by Default</option>
                      <option value="highPrice">Sort by High Price</option>
                      <option value="lowPrice">Sort by Low Price</option>
                      <option value="nameAZ">Sort by Name (A-Z)</option>
                      <option value="nameZA">Sort by Name (Z-A)</option>
                    </select>
                  </li>
                  <li className="search">
                    <input
                      className="searchInpCss"
                      type="text"
                      placeholder="Search by product name"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </li>
                  <li className="category">
                    <select
                      className="nice-select"
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                      <option value="all">All Category</option>
                      <option value="Featured">Featured</option>
                      <option value="Bestseller">Bestseller</option>
                      <option value="Latest">Latest</option>
                    </select>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeView === "grid" ? "active show" : ""
                  }`}
                  id="grid-view"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                >
                  <div className="product-grid-view row g-y-20">
                    {renderProducts()}
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeView === "list" ? "active show" : ""
                  }`}
                  id="list-view"
                  role="tabpanel"
                  aria-labelledby="list-view-tab"
                >
                  <div className="product-list-view row g-y-30">
                    {renderProducts()}
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    {[
                      ...Array(
                        Math.ceil(filteredProducts.length / productsPerPage)
                      ),
                    ].map((_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Next"
                        onClick={handleNextPage}
                      >
                        »
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
