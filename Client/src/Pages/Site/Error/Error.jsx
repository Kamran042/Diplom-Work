import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss"

const Error = () => {
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
                <h2 className="breadcrumb-heading">ERROR 404</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
      className="error-404-area section-space-y-axis-100" 
      style={{ backgroundImage: 'url(https://htmldemo.net/pronia/pronia/assets/images/error-404/bg/1-1920x886.png)' }}
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 align-self-center">
            <div className="error-404-content">
              <div className="error-404-img">
                <img src="https://htmldemo.net/pronia/pronia/assets/images/error-404/404.png" alt="Error Imagee" />
              </div>
              <h2 className="title">
                <span>Oops,</span> page not found!
              </h2>
              <div className="button-wrap">
                <Link className="btn btn-error" to="/">
                  Back to home
                  <i className="pe-7s-home"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Error;
