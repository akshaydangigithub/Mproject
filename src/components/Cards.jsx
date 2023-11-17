import React from "react";
import "../css/cards.css";

const Cards = () => {
  return (
    <div className="cards_main px-5">
      <h3>
        ELEVATE YOUR SKILLS: FIND YOUR PATH WITH OUR <br />{" "}
        <span>IN DEMAND COURSES</span>
      </h3>
      <h6 className="mt-3">
        <span>
          <u>Agile Delivery</u>
        </span>
        <span className="ms-3">Product Management</span>
        <span className="ms-3">Portfolio & Leadership</span>
        <span className="ms-3">Teams & DevOps</span>
      </h6>
      <div className="row cards mt-4">
        <div className="col-md-3">
          <div className="card p-3">
            <div className="head">
              <h6>Trending</h6>
            </div>
            <h6 className="mt-3">Leading SAFE 6.0 Certification</h6>
            <ul className="mt-3">
              <li>Learning to lead Agile transformation in enterprises</li>
              <li className="mt-3">
                Get Certified by SAFe Practice Consultant: earns 16 PDUs & SEUs
              </li>
            </ul>
            <button className="mt-3">Enroll Now</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="head">
              <h6>Trending</h6>
            </div>
            <h6 className="mt-3">Leading SAFE 6.0 Certification</h6>
            <ul className="mt-3">
              <li>Learning to lead Agile transformation in enterprises</li>
              <li className="mt-3">
                Get Certified by SAFe Practice Consultant: earns 16 PDUs & SEUs
              </li>
            </ul>
            <button className="mt-3">Enroll Now</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="head">
              <h6>Trending</h6>
            </div>
            <h6 className="mt-3">Leading SAFE 6.0 Certification</h6>
            <ul className="mt-3">
              <li>Learning to lead Agile transformation in enterprises</li>
              <li className="mt-3">
                Get Certified by SAFe Practice Consultant: earns 16 PDUs & SEUs
              </li>
            </ul>
            <button className="mt-3">Enroll Now</button>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <div className="head">
              <h6>Trending</h6>
            </div>
            <h6 className="mt-3">Leading SAFE 6.0 Certification</h6>
            <ul className="mt-3">
              <li>Learning to lead Agile transformation in enterprises</li>
              <li className="mt-3">
                Get Certified by SAFe Practice Consultant: earns 16 PDUs & SEUs
              </li>
            </ul>
            <button className="mt-3">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
