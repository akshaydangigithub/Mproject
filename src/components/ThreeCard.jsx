import React from "react";

const ThreeCard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-4 text-center"
            style={{
              backgroundColor: "#e51a4b",
              color: "#fff",
              padding: "100px 100px",
            }}
          >
            <h3 className="pb-3 fw-light">Trainings</h3>
            <h5>Learn, Grow, Achieve.</h5>
            <p className="">
              Regular training and learning lead to a higher level of shared
              understanding between teams and leaders, fostering transparency,
              innovation, alignment, and a higher level of team cohesiveness.
              This is the first step towards a successful transformation
              journey.
            </p>
          </div>
          <div
            className="col-4 text-center"
            style={{
              backgroundColor: "#060436",
              color: "#fff",
              padding: "100px 100px",
            }}
          >
            <h3 className="pb-3 fw-light">COACHING & CONSULTING</h3>
            <h5>Build a better version</h5>
            <p className="">
              Post-training, teams, and leaders need continuous coaching and
              consulting until new ways of working and mindset become their
              second nature and habit. This is manifested by the continuous
              support of Advance Agility’s Coaches working with clients to
              deliver an impactful outcome.
            </p>
          </div>
          <div
            className="col-4 text-center"
            style={{
              backgroundColor: "#e51a4b",
              color: "#fff",
              padding: "100px 100px",
            }}
          >
            <h3 className="pb-3 fw-light">Resource Augmentation</h3>
            <h5>Talent Gap, Resourced</h5>
            <p className="">
              Organizations need continuous support to fulfill roles or
              initiatives which can help them bring required experience and
              skillset in-house to deliver value to the client and at the same
              time build the capability in-house with the support of our SMEs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeCard;
