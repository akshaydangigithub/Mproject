import React from "react";
import sideimg from "../assets/bannerside.png";
const WhyChoose = () => {
  return (
    <>
      <div className="container-fluid mt-5 mx-5">
        <div className="row">
          <div className="col-6">
            <h2>Why Choose Advance Agility?</h2>
            <div className="p-3">
              <h4>01. Process Enablement</h4>
              <p>
                We work very closely with clients to provide consulting,
                coaching, and facilitating process re-engineering as required to
                enable client for success in this changing world.
              </p>
            </div>
            <hr />
            <div className="p-3">
              <h4>03. People Enablement</h4>
              <p>
                No Team in today’s world can be successful without great command
                on technology, network, infrastructure. We provide training,
                architecture services, and infrastructure setup services along
                with the SMEs of these technology to help clients.
              </p>
            </div>
            <hr />
            <div className="p-3">
              <h4>03. People Enablement</h4>
              <p>
                We help clients by providing manpower, consulting services,
                recruitment, individual role or domain-based training, and
                upskilling programs to ensure that clients have the right people
                to get the work done in the least possible sustainable time
                while meeting targets and keeping customers at the center.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <img src={sideimg} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-center p-5 mx-5 my-3 fs-5">
          Advance Agility aims for successful transformation with a holistic
          approach by enabling People, Processes, and Technology using our tools
          like Training, Coaching/Consulting, and Resource Augmentation.
          Adoption of this multi-dimensional view ensures that we can suggest to
          clients the best way to approach transformation and help achieve their
          strategic goals. Our achievements are a true reflection of success
          using this approach.
        </p>
      </div>
    </>
  );
};

export default WhyChoose;
