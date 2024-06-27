import React from 'react';
import "./Banner.scss"
import {Link} from "react-router-dom"

const BannerArea = () => {
  return (
    <div className="banner-area section-space-top-90">
      <div className="container">
        <div className="row g-min-30 g-4">
          <div className="col-lg-8">
            <BannerItem
              imgSrc="https://htmldemo.net/pronia/pronia/assets/images/banner/1-1-770x300.jpg"
              alt="Banner Image"
              collection="Collection Of Cactus"
              title="Pottery Pots & Plant"
              buttonText="Shop Now"
              buttonHref="shop"
              textPosition="left"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BannerItem
              imgSrc="https://htmldemo.net/pronia/pronia/assets/images/banner/1-2-370x300.jpg"
              alt="Banner Image"
              collection="New Collection"
              title="Plant Port"
              buttonText="Shop Now"
              buttonHref="shop"
              textPosition="center"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BannerItem
              imgSrc="https://htmldemo.net/pronia/pronia/assets/images/banner/1-3-370x300.jpg"
              alt="Banner Image"
              collection="New Collection"
              title="Plant Port"
              buttonText="Shop Now"
              buttonHref="shop"
              textPosition="center"
            />
          </div>
          <div className="col-lg-8">
            <BannerItem
              imgSrc="https://htmldemo.net/pronia/pronia/assets/images/banner/1-4-770x300.jpg"
              alt="Banner Image"
              collection="Collection Of Cactus"
              title="Hanging Pots & Plant"
              buttonText="Shop Now"
              buttonHref="shop"
              textPosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BannerItem = ({
  imgSrc,
  alt,
  collection,
  title,
  buttonText,
  buttonHref,
  textPosition,
}) => {
  return (
    <div className="banner-item img-hover-effect">
      <div className="banner-img">
        <img src={imgSrc} alt={alt} />
      </div>
      <div
        className={`banner-content text-position-${textPosition}`}
      >
        <span className="collection">{collection}</span>
        <h3 className="title">{title}</h3>
        <div className="button-wrap">
          <Link
            className={`btn btn-custom-size ${
              textPosition === 'center'? 'lg-size' : ''
            } btn-pronia-primary`}
            to={buttonHref}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerArea;