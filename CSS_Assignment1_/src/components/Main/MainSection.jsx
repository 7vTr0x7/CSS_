import React from "react";
import "./main.style.css";
import Author from "../Author";

const MainSection = () => {
  return (
    <main>
      <div className="row">
        <div>
          <img
            className="main-card-img"
            alt="main-card"
            src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage1_gsl1i7.jpg"
          />
        </div>
        <div className="col">
          <div>
            <h2>GETTING STARTED</h2>
            <p className="title">Welcome to Ghost</p>
          </div>
          <p className="para">
            Welcome, it's great to have you here. We know that first impressions
            are important, so we've populated your new site with some initial
            getting started posts that will help you get familiar with
            everything in no time.
          </p>
          <Author />
        </div>
      </div>
      <hr />
    </main>
  );
};

export default MainSection;
