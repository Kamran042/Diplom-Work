import React, { useState } from 'react';
import Modal from 'react-modal';
import Counter from './Counter';
import 'intersection-observer'; // Polyfill для поддержки в старых браузерах

const VideoContainer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="banner-with-counter mt-0">
      <div className="banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="banner-item"
                style={{
                  backgroundImage: `url("https://htmldemo.net/pronia/pronia/assets/images/banner/3-1-1208x542.jpg")`,
                }}
                data-bg-image="assets/images/banner/3-1-1208x542.jpg"
              >
                <div className="popup-btn">
                  <a
                    className="popup-vimeo wave-btn"
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                  >
                    <span />
                    <span />
                    <span />
                    <div className="icon">
                      <i className="pe-7s-play" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="mfp-content"
        overlayClassName="mfp-iframe-scaler"
      >
        <button
          title="Close (Esc)"
          type="button"
          className="mfp-close"
          onClick={closeModal}
        >
          ×
        </button>
        <iframe
          style={{ width: '100%', height: '100%' }}
          className="mfp-iframe"
          src="//player.vimeo.com/video/172601404?autoplay=1"
          frameBorder="0"
          allowFullScreen
        />
      </Modal>
      <div className="counter-area">
        <div className="container">
          <h2 className="counter-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do <span>eiusmod tempor</span> incididunt.
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6">
              <div className="counter-item">
                <Counter endValue={150} duration={500} prefix="+" />
                <h4 className="count-title mb-0">Projects</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="counter-item">
                <Counter endValue={316} duration={1000} prefix="+" />
                <h4 className="count-title mb-0">Clients</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
              <div className="counter-item">
                <Counter endValue={147} duration={1500} prefix="+" />
                <h4 className="count-title mb-0">Rating</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
              <div className="counter-item">
                <Counter endValue={48} duration={2000} prefix="+" />
                <h4 className="count-title mb-0">Award</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
