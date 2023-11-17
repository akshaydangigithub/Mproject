import React from "react";
import "../css/navbar.css";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="enroll_btn">
        <button>Enroll Now</button>
      </div>
      <div className="links">
        <div className="home">
          <Link className="text-decoration-none text-black" to="/">
            Home
          </Link>
        </div>
        <div className="safe">
          <Link className="text-decoration-none text-black" to="#">
            SAFe
          </Link>
          <div className="safe_drop drop py-3 px-2">
            <p className="drop_links mb-2">Leading SAFe</p>
            <p className="drop_links mb-2">Impelementing SAFe 6.0</p>
            <p className="drop_links mb-2">
              SAFe Product Owner/Product Manager
            </p>
          </div>
        </div>
        <div className="scrum">
          <Link className="text-decoration-none text-black" to="#">
            Scrum.org
          </Link>
          <div className="scrum_drop drop py-3 px-2">
            <p className="drop_links mb-2">Professional Scrum Master</p>
            <p className="drop_links mb-2">Professional Scrum Product Owner</p>
            <p className="drop_links mb-2">Professional Scrum Developer</p>
            <p className="drop_links mb-2">Professional Scrum Foundations</p>
          </div>
        </div>
        <div className="workshop">
          <Link className="text-decoration-none text-black" to="#">
            Workshop
          </Link>

          <div className="workshop_drop drop py-3 px-2">
            <p className="drop_links mb-2">Agile Estimarion</p>
            <p className="drop_links mb-2">Agile Testing</p>
            <p className="drop_links mb-2">Design Thinking</p>
            <p className="drop_links mb-2">DevOps</p>
            <p className="drop_links mb-2">Kanban</p>
            <p className="drop_links mb-2">Lean</p>
          </div>
        </div>
        <div className="courses">
          <Link className="text-decoration-none text-black" to="#">
            AI Courses
          </Link>

          <div className="courses_drop drop py-3 px-2">
            <p className="drop_links mb-2">AI for Managers</p>
            <p className="drop_links mb-2">AI for Leaders</p>
            <p className="drop_links mb-2">AI for Engineers</p>
            <p className="drop_links mb-2">AI for Developers</p>
            <p className="drop_links mb-2">AI for Architects</p>
          </div>
        </div>
        <div className="other_courses">
          <Link className="text-decoration-none text-black" to="#">
            Other Courses
          </Link>

          <div className="other_courses_drop drop py-3 px-2">
            <p className="drop_links mb-2">Agile Leadership</p>
            <p className="drop_links mb-2">Agile HR</p>
            <p className="drop_links mb-2">Agile Marketing</p>
            <p className="drop_links mb-2">Agile Sales</p>
            <p className="drop_links mb-2">Agile Finance</p>
          </div>
        </div>
        <div className="more">
          <Link className="text-decoration-none text-black" to="#">
            More
          </Link>

          <div className="more_drop drop py-3 px-2">
            <p className="drop_links mb-2">About Us</p>
            <p className="drop_links mb-2">Contact Us</p>
            <p className="drop_links mb-2">Blog</p>
          </div>
        </div>
        <div className="dropdown d-flex align-items-center ">
          <button>
            USD ($) <FaAngleDown className="down_icon" />
          </button>
          <HiShoppingCart className="fs-3 ms-3 beg" />

          <div className="dropdown_drop drop py-3 px-2">
            <p className="drop_links mb-2">USD ($)</p>
            <p className="drop_links mb-2">INR (₹)</p>
            <p className="drop_links mb-2">EUR (€)</p>
            <p className="drop_links mb-2">GBP (£)</p>
            <p className="drop_links mb-2">AUD ($)</p>
          </div>
        </div>
      </div>
      <div className="logo2">
        <img src={logo2} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
