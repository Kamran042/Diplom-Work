import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Basket.scss";
import MainContext from "../../../Context/Context";

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = basket.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      );
      setTotalAmount(total.toFixed(2));
    };

    calculateTotalAmount();
  }, [basket]);

  const removeFromBasket = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
    localStorage.setItem("basketForDiplomWork", JSON.stringify(updatedBasket));
  };

  const increaseQuantity = (index) => {
    const updatedBasket = [...basket];
    updatedBasket[index].count++;
    setBasket(updatedBasket);
    localStorage.setItem("basketForDiplomWork", JSON.stringify(updatedBasket));
  };

  const decreaseQuantity = (index) => {
    const updatedBasket = [...basket];
    if (updatedBasket[index].count > 1) {
      updatedBasket[index].count--;
      setBasket(updatedBasket);
      localStorage.setItem("basketForDiplomWork", JSON.stringify(updatedBasket));
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
                <h2 className="breadcrumb-heading">CART PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Cart Page </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-area section-space-y-axis-100">
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
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {basket.map((item, index) => (
                        <tr key={index}>
                          <td className="product_remove">
                            <a
                              type="button"
                              className="remove-item-btn"
                              onClick={() => removeFromBasket(index)}
                            >
                              <i className="pe-7s-close"></i>
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <img
                              src={`http://localhost:8080/${item.image1}`}
                              style={{ maxWidth: "112px", maxHeight: "124px" }}
                              alt="Cart Thumbnail"
                            />
                          </td>
                          <td className="product-name">{item.title}</td>
                          <td className="product-price">
                            <span className="amount">${item.price}</span>
                          </td>
                          <td className="quantity">
                            <div className="cart-plus-minus">
                              <div
                                className="dec qtybutton"
                                onClick={() => decreaseQuantity(index)}
                              >
                                <i className="fa fa-minus"></i>
                              </div>
                              <input
                                className="cart-plus-minus-box"
                                value={item.count}
                                type="text"
                                readOnly
                              />
                              <div
                                className="inc qtybutton"
                                onClick={() => increaseQuantity(index)}
                              >
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">
                              ${(item.price * item.count).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul>
                        <li>
                          Subtotal <span>${totalAmount}</span>
                        </li>
                        <li>
                          Total <span>${totalAmount}</span>
                        </li>
                      </ul>
                      {/* <Link to={"/checkout"}>Proceed to checkout</Link> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
