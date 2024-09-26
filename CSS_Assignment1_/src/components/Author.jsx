import React from "react";

const Author = () => {
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
        <p className="author-name">Ghost</p>
        <div className="date-read">
          <p>25 FEB 2020 | 1 MIN</p>
          <p>READ</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
