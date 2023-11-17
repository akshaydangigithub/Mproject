import React from "react";
import blogimg from "../assets/blog.webp";
const Blogs = () => {
  return (
    <>
      <div className="mx-5 mt-5">
        <h3 className="text-center fw-normal">
          Learn for free using our recent Blogs
        </h3>
        <div className="row gap-3 justify-content-center my-5">
          <div className="col-3">
            <div className="card">
              <img
                src={blogimg}
                className="card-img-top w-100 h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src={blogimg}
                className="card-img-top w-100 h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src={blogimg}
                className="card-img-top w-100 h-50"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="d-block mx-auto p-3 py-2 text-white border border-0"
          style={{ backgroundColor: "#5f5d86" }}
        >
          Book One hour session on Fundamental of Agility
        </button>
      </div>
    </>
  );
};

export default Blogs;
