import React, { useEffect, useState } from 'react';
import './Loading.scss'; 

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader-activate ${loaded ? 'loaded' : ''}`}>
      <div className="preloader-area-wrap">
        <div className="spinner d-flex justify-content-center align-items-center h-100">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
      <div className="left-half"></div>
      <div className="right-half"></div>
    </div>
  );
};

export default Preloader;
