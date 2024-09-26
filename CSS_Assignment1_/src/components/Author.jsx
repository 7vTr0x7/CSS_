import React from "react";

const Author = ({ read, min, bigCard, mainCard }) => {
  return (
    <div className="author">
      <div>
        <img
          className="author-logo"
          alt="logo"
          src="https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264799/smallLogo_fmjzvk.jpg"
        />
      </div>
      <div className="author-info">
        <p className="author-name">GHOST</p>
        <div
          className="date-read"
          style={bigCard && { display: "flex", gap: "10px" }}>
          <p>
            25 FEB 2020 {mainCard ? "|" : "."} {min} MIN
          </p>
          <p>{read && "READ"}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
