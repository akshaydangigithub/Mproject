import React from "react";

const Score = () => {
  return (
    <div className="mt-5 px-5">
      <div className="row">
        <div
          style={{ backgroundColor: "#F6F9F5" }}
          className="col-3 border py-5 d-flex align-items-center justify-content-center flex-column "
        >
          <h1 style={{ color: "#E5194A" }}>10+</h1>
          <h6>Successfull Transformations</h6>
        </div>
        <div
          style={{ backgroundColor: "#F6F9F5" }}
          className="col-3 border py-5 d-flex align-items-center justify-content-center flex-column "
        >
          <h1 style={{ color: "#E5194A" }}>100+</h1>
          <h6>Trainers Build</h6>
        </div>
        <div
          style={{ backgroundColor: "#F6F9F5" }}
          className="col-3 border py-5 d-flex align-items-center justify-content-center flex-column "
        >
          <h1 style={{ color: "#E5194A" }}>5000+</h1>
          <h6>People Placed</h6>
        </div>
        <div
          style={{ backgroundColor: "#F6F9F5" }}
          className="col-3 border py-5 d-flex align-items-center justify-content-center flex-column "
        >
          <h1 style={{ color: "#E5194A" }}>10000+</h1>
          <h6>People Trained</h6>
        </div>
      </div>
    </div>
  );
};

export default Score;
