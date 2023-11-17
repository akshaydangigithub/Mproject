import React from "react";

const Footer = () => {
  return (
    <div className="footer_main mt-5">
      <hr />
      <div className="px-5">
        <div className="row">
          <div className="col-md-4">
            <h6 className="mt-3">Popular Courses</h6>
            <p className="mt-2 mb-0 text-secondary">Leading SAFe</p>
            <p className="mt-2 mb-0 text-secondary">SAFe Scrum Master</p>
            <p className="mt-2 mb-0 text-secondary">SAFe Advance Scrum Master</p>
            <p className="mt-2 mb-0 text-secondary">SAFe Release Train Engineer</p>
          </div>
          <div className="col-md-4">
            <h6 className="mt-3">Legal</h6>
              <p className="mt-2 mb-0 text-secondary">Terms of Use</p>
              <p className="mt-2 mb-0 text-secondary">Privacy Policy</p>
              <p className="mt-2 mb-0 text-secondary">Cookie Policy</p>
              <p className="mt-2 mb-0 text-secondary">Do Not Sell My Personal Information</p>
          </div>
          <div className="col-md-4">
            <h6 className="mt-3">Helpful Links</h6>
              <p className="mt-2 mb-0 text-secondary ">Register as Trainer</p>
              <p className="mt-2 mb-0 text-secondary ">Careers</p>
              <p className="mt-2 mb-0 text-secondary ">Terms & Conditions</p>
              <p className="mt-2 mb-0 text-secondary ">Payment Options</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <h6 className="mt-3">© 2023 BY ADVANCE AGILITY.  ALL RIGHTS RESERVED  </h6>
          </div>
          <div className="col-md-6">
            <h6 className="mt-3 text-end">Terms of Use | Privacy Policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
