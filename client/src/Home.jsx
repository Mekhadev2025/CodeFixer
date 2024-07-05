import React from "react";
import { Link } from "react-router-dom";
import heroImg from "./assets/hero.jpg"
import "./styles/Home.css"
const Home = () => {
  return (
    <div className="home">
      <div className="home-wrap">
        <div className="home-section1">
          <h2 className="home-title">Welcome to CodeQuest</h2>
          <p>
            Step up your coding skills with our innovative challenges designed
            to inspire and educate.
          </p>
          <Link to="/code">
            <button className="btn-get-started">Get Started</button>
          </Link>
        </div>
        <div className="home-section2">
            <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
