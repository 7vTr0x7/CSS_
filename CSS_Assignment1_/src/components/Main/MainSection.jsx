import React from "react";
import "./main.style.css";
import Author from "../Author";
import Cards from "../Card/Cards";

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
          <Author read={true} min={1} mainCard={true} />
        </div>
      </div>
      <hr />
      <div className="cards">
        <Cards
          url={
            "https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage2_ken5hq.jpg?_s=public-apps"
          }
          title={"Writing posts with Ghost ✍"}
          para={
            " Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly."
          }
          read={true}
          min={3}
        />
        <Cards
          url={
            "https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage3_smh9dh.jpg?_s=public-apps"
          }
          title={"Publishing options"}
          para={
            "The Ghost editor post settings menu has everything you need to fully optimize and distribute your content effectively."
          }
          read={true}
          min={2}
        />
        <Cards
          url={
            "https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264797/ghostImage4_fqf7yz.jpg?_s=public-apps"
          }
          title={"Managing admin settings"}
          para={
            "There are a couple of things to do next while you're getting set up: making your site private and inviting your team."
          }
          read={true}
          min={2}
        />
      </div>
      <hr />
      <div className="cards">
        <Cards
          bigCard={true}
          url={
            "https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage5_mgxrty.jpg?_s=public-apps"
          }
          title={"Writing posts with Ghost ✍"}
          para={
            " Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly."
          }
          read={true}
          min={3}
        />
        <Cards
          bigCard={true}
          url={
            "https://res.cloudinary.com/dwxq0majx/image/upload/fl_preserve_transparency/v1727264798/ghostImage6_ezgbwj.jpg?_s=public-apps"
          }
          title={"Publishing options"}
          para={
            "The Ghost editor post settings menu has everything you need to fully optimize and distribute your content effectively."
          }
          read={true}
          min={2}
        />
      </div>
    </main>
  );
};

export default MainSection;
