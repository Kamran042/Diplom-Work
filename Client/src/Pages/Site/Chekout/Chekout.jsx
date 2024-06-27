import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chekout.scss"



const Chekout = () => {
  const [billingDetails, setBillingDetails] = useState({
    country: "Bangladesh",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
    phone: "",
  });

  const [createAccount, setCreateAccount] = useState(false);
  const [differentAddress, setDifferentAddress] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [coupon, setCoupon] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handlePaymentMethodChange = (method) => (e) => {
    e.preventDefault()
    setPaymentMethod(method);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
                <h2 className="breadcrumb-heading">CHECKOUT PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Checkout </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="coupon-accordion">
                <h3>
                  Returning customer?{" "}
                  <span id="showlogin">Click here to login</span>
                </h3>
                <div id="checkout-login" className="coupon-content">
                  <div className="coupon-info">
                    <p className="coupon-text mb-1">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    <form onSubmit={handleFormSubmit}>
                      <p className="form-row-first">
                        <label className="mb-1">
                          Username or email <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row-last">
                        <label>
                          Password <span className="required">*</span>
                        </label>
                        <input type="text" />
                      </p>
                      <p className="form-row">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                      </p>
                      <p className="lost-password">
                        <a href="#">Lost your password?</a>
                      </p>
                    </form>
                  </div>
                </div>
                <h3>
                  Have a coupon?{" "}
                  <span id="showcoupon">Click here to enter your code</span>
                </h3>
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form onSubmit={handleFormSubmit}>
                      <p className="checkout-coupon">
                        <input
                          placeholder="Coupon code"
                          type="text"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        <input
                          className="coupon-inner_btn"
                          value="Apply Coupon"
                          type="submit"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <form onSubmit={handleFormSubmit}>
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select clearfix">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select
                          className="myniceselect nice-select wide"
                          name="country"
                          value={billingDetails.country}
                          onChange={handleInputChange}
                        >
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="uk">London</option>
                          <option value="rou">Romania</option>
                          <option value="fr">French</option>
                          <option value="de">Germany</option>
                          <option value="aus">Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={billingDetails.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={billingDetails.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={billingDetails.companyName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={billingDetails.address}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          name="apartment"
                          value={billingDetails.apartment}
                          onChange={handleInputChange}
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={billingDetails.city}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={billingDetails.state}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="postcode"
                          value={billingDetails.postcode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={billingDetails.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={billingDetails.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list create-acc">
                        <input
                          type="checkbox"
                          id="cbox"
                          checked={createAccount}
                          onChange={handleCheckboxChange(setCreateAccount)}
                        />
                        <label htmlFor="cbox">Create an account?</label>
                      </div>
                      {createAccount && (
                        <div
                          id="cbox-info"
                          className="checkout-form-list create-account"
                        >
                          <p>
                            Create an account by entering the information below.
                            If you are a returning customer please login at the
                            top of the page.
                          </p>
                          <label>
                            Account password <span className="required">*</span>
                          </label>
                          <input type="password" placeholder="password" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        <label>Ship to a different address?</label>
                        <input
                          type="checkbox"
                          id="ship-box"
                          checked={differentAddress}
                          onChange={handleCheckboxChange(setDifferentAddress)}
                        />
                      </h3>
                    </div>
                    {differentAddress && (
                      <div id="ship-box-info" className="row">
                        {/* Repeat the same structure for shipping details if differentAddress is true */}
                      </div>
                    )}
                    <div className="order-notes">
                      <div className="checkout-form-list checkout-form-list-2">
                        <label>Order Notes</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          value={orderNotes}
                          onChange={(e) => setOrderNotes(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12">
              <div className="your-order">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="cart-product-name">Product</th>
                        <th className="cart-product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          Vestibulum suscipit
                          <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="cart-product-total">
                          <span className="amount">$165.00</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="cart-product-name">
                          Vestibulum suscipit
                          <strong className="product-quantity">× 1</strong>
                        </td>
                        <td className="cart-product-total">
                          <span className="amount">$165.00</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td>
                          <span className="amount">$215.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td>
                          <strong>
                            <span className="amount">$215.00</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment-method">
                  <div className="payment-accordion">
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header" id="#payment-1">
                          <h5 className="panel-title">
                            <a
                              href="#"
                              className={
                                paymentMethod === "bank" ? "" : "collapsed"
                              }
                              onClick={handlePaymentMethodChange("bank")}
                            >
                              Direct Bank Transfer.
                            </a>
                          </h5>
                        </div>
                        {paymentMethod === "bank" && (
                          <div
                            id="collapseOne"
                            className="collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-2">
                          <h5 className="panel-title">
                            <a
                              href="#"
                              className={
                                paymentMethod === "cheque" ? "" : "collapsed"
                              }
                              onClick={handlePaymentMethodChange("cheque")}
                            >
                              Cheque Payment
                            </a>
                          </h5>
                        </div>
                        {paymentMethod === "cheque" && (
                          <div
                            id="collapseTwo"
                            className="collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="card">
                        <div className="card-header" id="#payment-3">
                          <h5 className="panel-title">
                            <a
                              href="#"
                              className={
                                paymentMethod === "paypal" ? "" : "collapsed"
                              }
                              onClick={handlePaymentMethodChange("paypal")}
                            >
                              PayPal
                            </a>
                          </h5>
                        </div>
                        {paymentMethod === "paypal" && (
                          <div
                            id="collapseThree"
                            className="collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="order-button-payment">
                      <input value="Place order" type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chekout;
