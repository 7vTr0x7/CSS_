import React from "react";
import "./top.style.css";

const Top = () => {
  return (
    <div className="top-section">
      <div className="container">
        <img
          className="img-container"
          src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264799/middleLogo-3_g41y4r.jpg"
          alt="image"
        />
        <p className="text">Thoughts, stories, and ideas</p>
      </div>
    </div>
  );
};

export default Top;
