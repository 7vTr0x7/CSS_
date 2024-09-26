import React from "react";
import "./card.style.css";
import Author from "../Author";

const Cards = ({ url, title, para, read, min }) => {
  return (
    <div className="col">
      <div>
        <img className="img" alt="img" src={url} />
      </div>
      <div>
        <h2 className="heading">GETTING STARTED</h2>
        <h3 className="card-title">{title}</h3>
        <p className="card-para">{para}</p>
      </div>
      <Author read={read} min={min} />
    </div>
  );
};

export default Cards;
