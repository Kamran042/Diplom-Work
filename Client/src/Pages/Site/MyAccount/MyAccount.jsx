import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MyAccount.scss";
import MainContext from "../../../Context/Context";
import { jwtDecode } from "jwt-decode";

const MyAccount = () => {
  const { user, setUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    setUser(null); 
    sessionStorage.removeItem("token");
    navigate("/logreg");
  };

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/logreg");
  //   }
  // }, [user, navigate]);

  if (!user) {
    return (
      <div className="error-message">
        <p style={{textAlign:"center", margin:"20px"}}>You are not logged in. Please <Link to="/logreg">login</Link>.</p>
      </div>
    );
  }

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
                <h2 className="breadcrumb-heading">MY ACCOUNT PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-page-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav myaccount-tab-trigger"
                id="account-page-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="account-dashboard-tab"
                    data-bs-toggle="tab"
                    href="#account-dashboard"
                    role="tab"
                    aria-controls="account-dashboard"
                    aria-selected="true"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="account-orders-tab"
                    data-bs-toggle="tab"
                    href="#account-orders"
                    role="tab"
                    aria-controls="account-orders"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Orders
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="account-address-tab"
                    data-bs-toggle="tab"
                    href="#account-address"
                    role="tab"
                    aria-controls="account-address"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Addresses
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="account-details-tab"
                    data-bs-toggle="tab"
                    href="#account-details"
                    role="tab"
                    aria-controls="account-details"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Account Details
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="account-logout-tab"
                    onClick={handleLogout}
                    role="tab"
                    aria-selected="false"
                    tabIndex="-1"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div
                className="tab-content myaccount-tab-content"
                id="account-page-tab-content"
              >
                <div
                  className="tab-pane fade show active"
                  id="account-dashboard"
                  role="tabpanel"
                  aria-labelledby="account-dashboard-tab"
                >
                  <div className="myaccount-dashboard">
                    <p>
                      Hello <b>{user.username}</b> (not {user.username}?{" "}
                      <a href="#" onClick={handleLogout}>Sign out</a>)
                    </p>
                    <p>
                      From your account dashboard you can view your recent
                      orders, manage your shipping and billing addresses and{" "}
                      <a href="#">edit your password and account details</a>.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="account-orders"
                  role="tabpanel"
                  aria-labelledby="account-orders-tab"
                >
                  <div className="myaccount-orders">
                    <h4 className="small-title">MY ORDERS</h4>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <tbody>
                          <tr>
                            <th>ORDER</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                            <th>TOTAL</th>
                            <th></th>
                          </tr>
                          <tr>
                            <td>
                              <a className="account-order-id" href="#">
                                #5364
                              </a>
                            </td>
                            <td>Mar 27, 2019</td>
                            <td>On Hold</td>
                            <td>$162.00 for 2 items</td>
                            <td>
                              <a href="#" className="btn btn-dark">
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a className="account-order-id" href="#">
                                #5356
                              </a>
                            </td>
                            <td>Mar 27, 2019</td>
                            <td>On Hold</td>
                            <td>$162.00 for 2 items</td>
                            <td>
                              <a href="#" className="btn btn-dark">
                                <span>View</span>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="account-address"
                  role="tabpanel"
                  aria-labelledby="account-address-tab"
                >
                  <div className="myaccount-address">
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div className="row">
                      <div className="col">
                        <h4 className="small-title">BILLING ADDRESS</h4>
                        <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState
                          of Lorem
                        </address>
                      </div>
                      <div className="col">
                        <h4 className="small-title">SHIPPING ADDRESS</h4>
                        <address>
                          1234 Heaven Stress, Beverly Hill OldYork UnitedState
                          of Lorem
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="account-details"
                  role="tabpanel"
                  aria-labelledby="account-details-tab"
                >
                  <div className="myaccount-details">
                    <form action="#" className="myaccount-form">
                      <div className="myaccount-form-inner">
                        <div className="single-input single-input-half">
                          <label>First Name*</label>
                          <input type="text" />
                        </div>
                        <div className="single-input single-input-half">
                          <label>Last Name*</label>
                          <input type="text" />
                        </div>
                        <div className="single-input">
                          <label>Email*</label>
                          <input type="email" />
                        </div>
                        <div className="single-input">
                          <label>
                            Current Password(leave blank to leave unchanged)
                          </label>
                          <input type="password" />
                        </div>
                        <div className="single-input">
                          <label>
                            New Password (leave blank to leave unchanged)
                          </label>
                          <input type="password" />
                        </div>
                        <div className="single-input">
                          <label>Confirm New Password</label>
                          <input type="password" />
                        </div>
                        <div className="single-input">
                          <button
                            className="btn btn-custom-size lg-size btn-pronia-primary"
                            type="submit"
                          >
                            <span>SAVE CHANGES</span>
                          </button>
                        </div>
                      </div>
                    </form>
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

export default MyAccount;
