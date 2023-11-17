import React from "react";
import SocialImg from "../assets/social.png";
import Payment from "../assets/payment.png";
const SocialMedia = () => {
  return (
    <>
      <div className="container mx-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-4">
            <h3>Connect with us</h3>
            <img src={SocialImg} alt="" className="w-50" />
          </div>
          <div className="col-4">
            <h3>Get Our Weekly Newsletter</h3>
            <div className="mb-3 d-flex">
              <input
                type="email"
                className="form-control me-3 w-50"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <button className="btn btn-danger"> Submit</button>
            </div>
          </div>
          <div className="col-4">
            <h3>We Accepts</h3>
            <img src={Payment} alt="" className="w-50" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
