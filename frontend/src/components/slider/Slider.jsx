import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import img from "../../assets/images/img.jpg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
const imgs = [img, img1, img2];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(currentSlide);
  const previous = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const next = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <>
      <div className="slider-container">
        <div className="slide" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          <img src={imgs[0]} alt="" />
          <img src={imgs[1]} alt="" />
          <img src={imgs[2]} alt="" />
        </div>

        <div className="btn-container">
          <button className="btn" onClick={previous}>
            <GrLinkPrevious />
          </button>
          <button className="btn" onClick={next}>
            <GrLinkNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
