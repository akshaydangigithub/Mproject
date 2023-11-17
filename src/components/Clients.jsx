import React from "react";
import "../css/clients.css";
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";
import img3 from "../assets/img4.png";
import img4 from "../assets/img5.png";
import img5 from "../assets/img6.avif";
import img6 from "../assets/img7.png";
import img7 from "../assets/img8.png";
import img8 from "../assets/img8.webp";

const Clients = () => {
  return (
    <div className="clients_main mt-4">
      <h3 className="text-center ">
        OUR <span>CLIENTS</span>
      </h3>

      <div className="imgs mt-5">
        <div className="img_con">
          <img className="cimg" src={img1} alt="" />
          <img className="cimg" src={img2} alt="" />
          <img className="cimg" src={img3} alt="" />
          <img className="cimg" src={img4} alt="" />
          <img className="cimg" src={img5} alt="" />
          <img className="cimg" src={img6} alt="" />
          <img className="cimg" src={img7} alt="" />
          <img className="cimg" src={img8} alt="" />
          <img className="cimg" src={img1} alt="" />
          <img className="cimg" src={img2} alt="" />
          <img className="cimg" src={img3} alt="" />
          <img className="cimg" src={img4} alt="" />
          <img className="cimg" src={img5} alt="" />
          <img className="cimg" src={img6} alt="" />
          <img className="cimg" src={img7} alt="" />
          <img className="cimg" src={img8} alt="" />
          <img className="cimg" src={img1} alt="" />
          <img className="cimg" src={img2} alt="" />
          <img className="cimg" src={img3} alt="" />
          <img className="cimg" src={img4} alt="" />
          <img className="cimg" src={img5} alt="" />
          <img className="cimg" src={img6} alt="" />
          <img className="cimg" src={img7} alt="" />
          <img className="cimg" src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
