import React from "react";
import "./card.style.css";
import Author from "../Author";

const Cards = ({ bigCard, url, title, para, read, min }) => {
  return (
    <div className="card-col">
      <div className="">
        <img
          className="img"
          style={bigCard && { height: "60vh" }}
          alt="img"
          src={url}
        />
      </div>
      <div>
        <h2 className="heading">GETTING STARTED</h2>
        <h3 className="card-title">{title}</h3>
        <p className="card-para">{para}</p>
      </div>
      <Author read={read} min={min} bigCard={bigCard} />
    </div>
  );
};

export default Cards;
