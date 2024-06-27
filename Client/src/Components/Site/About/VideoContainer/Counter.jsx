import React, { useEffect, useRef } from "react";
import counterUp from "counterup2";
import "intersection-observer"; // Polyfill для поддержки в старых браузерах

const Counter = ({ endValue, duration, prefix }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const el = countRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counterUp(entry.target, {
              duration: duration,
              delay: 16,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [duration]);

  return (
    <div className="count-wrap">
      <h3 ref={countRef} className="count mb-0">
        {endValue}
      </h3>
      <span className="prefix">{prefix}</span>
    </div>
  );
};

export default Counter;
