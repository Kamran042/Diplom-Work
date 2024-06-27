import React, { useEffect, useState } from 'react';
import './Loading.scss'; 

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000); // Здесь устанавливается время загрузки (в миллисекундах)

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
    </div>
  );
};

export default Preloader;
