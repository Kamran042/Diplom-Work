import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Wishlist.scss";
import MainContext from "../../../Context/Context";

const Wishlist = () => {
  const { wishlist, setWishlist, basket, setBasket, toggleMiniCart } =
    useContext(MainContext);

  const removeFromWishlist = (event, item) => {
    event.preventDefault();

    const updatedWishlist = wishlist.filter((x) => x._id !== item._id);
    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlistForDiplomWork",
      JSON.stringify(updatedWishlist)
    );
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
                <h2 className="breadcrumb-heading">WISHLIST PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Wishlist </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wishlist-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="javascript:void(0)">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product_remove">remove</th>
                        <th className="product-thumbnail">images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="cart_btn">add to cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist.map((item, index) => (
                        <tr key={index}>
                          <td className="product_remove">
                            <a
                              href="#"
                              onClick={(event) =>
                                removeFromWishlist(event, item)
                              }
                            >
                              <i
                                className="pe-7s-close"
                                data-tippy="Remove"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                                tabIndex="0"
                              ></i>
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img
                                src={`http://localhost:8080/${item.image1}`}
                                alt="Wishlist Thumbnail"
                                style={{
                                  maxWidth: "112px",
                                  maxHeight: "124px",
                                }}
                              />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">{item.title}</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">${item.price}</span>
                          </td>

                          <td className="cart_btn">
                            <a onClick={(e) => addToCart(item, e)}>
                              add to cart
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
