import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Cards from "../components/Cards";
import Score from "../components/Score";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Cards/>
      <Score />
      <Footer/>
    </>
  );
};

export default Homepage;
