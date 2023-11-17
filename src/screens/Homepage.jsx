import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Cards from "../components/Cards";
import Score from "../components/Score";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import ThreeCard from "../components/ThreeCard";
import Blogs from "../components/Blogs";
import SocialMedia from "../components/SocialMedia";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Cards />
      <Score />
      <WhyChoose />
      <ThreeCard />
      <Blogs />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Homepage;
