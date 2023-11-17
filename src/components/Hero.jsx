import React from "react";
import "../css/hero.css";
import img from "../assets/img1.webp";

const Hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_img">
        <img src={img} alt="" />
      </div>
      <div className="hero_content">
        <h1>
          ONLINE LEARNING <br /> NOW IN{" "} 
          <span>
            <strong>YOUR HAND</strong>
          </span>
        </h1>
        <hr className="text-white " />
        <h4 className="text-white ">TOP RATED LEARNING COURSES</h4>
        <button className="en_btn mt-3">enroll now</button>
      </div>
    </div>
  );
};

export default Hero;
