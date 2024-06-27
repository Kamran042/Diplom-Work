import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./FAQ.scss"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "General Question",
      questions: [
        { title: "Before you get started", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Compatibility with premium plugins", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Install theme demo contents", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Translation and localization services", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Live chat support", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." }
      ]
    },
    {
      category: "Payment & Gift card",
      questions: [
        { title: "Changing the timezone", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Developer documentation", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Connnection social media channels", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Optimize theme speed & performance", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Fully responsive", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Translation and localization services", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "Live chat support", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." },
        { title: "RTL Support now", content: "Nulla imperdiet odio tempor nisl vulputate scelerisque. Fusce interdum ultricies convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est quis erat fringilla, at rutrum sem lacinia." }
      ]
    }
  ];

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
                <h2 className="breadcrumb-heading">FAQ PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>FAQ </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="faq-area section-space-top-25 section-space-bottom-100">
      <div className="container">
        <div className="row">
          {faqData.map((faq, i) => (
            <div className="col-lg-12" key={i}>
              <div className="frequently-area section-space-top-95">
                <h2 className="heading mb-0">{faq.category}</h2>
                <div className="row">
                  {faq.questions.slice(0, Math.ceil(faq.questions.length / 2)).map((question, j) => (
                    <div className="col-md-6" key={j}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="frequently-item">
                            <ul>
                              <li className={`has-sub ${activeIndex === `${i}-${j}` ? 'active' : ''}`}>
                                <a href="javascript:void(0)" onClick={() => handleToggle(`${i}-${j}`)}>
                                  {question.title} <i className="pe-7s-angle-down"></i>
                                </a>
                                <ul className="frequently-body" style={{ display: activeIndex === `${i}-${j}` ? 'block' : 'none' }}>
                                  <li>{question.content}</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {faq.questions.slice(Math.ceil(faq.questions.length / 2)).map((question, j) => (
                    <div className="col-md-6 pt-30 pt-md-0" key={j}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="frequently-item">
                            <ul>
                              <li className={`has-sub ${activeIndex === `${i}-${j + Math.ceil(faq.questions.length / 2)}` ? 'active' : ''}`}>
                                <a href="javascript:void(0)" onClick={() => handleToggle(`${i}-${j + Math.ceil(faq.questions.length / 2)}`)}>
                                  {question.title} <i className="pe-7s-angle-down"></i>
                                </a>
                                <ul className="frequently-body" style={{ display: activeIndex === `${i}-${j + Math.ceil(faq.questions.length / 2)}` ? 'block' : 'none' }}>
                                  <li>{question.content}</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;


