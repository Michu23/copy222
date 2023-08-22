import React, { useEffect, useState } from "react";
import { ReactComponent as MySvg } from "../assets/Icons/arrow-right-circle.svg";
import { ReactComponent as Ell } from "../assets/Ellips.svg";
import { ReactComponent as Grid } from "../assets/Maskgroup.svg";

import Companies from "../components/Companies";
import Cards from "../components/Home/Cards";
import Lake from "../components/Home/Lake";
import Pipeline from "../components/Home/Pipeline";
import Success from "../components/Home/Success";
import FAQs from "../components/Home/FAQs";

import Banner from "../components/Home/Banner";
import { Link } from "react-router-dom";

const Home = () => {
  const [card, setCard] = useState("");

  return (
    <>
      <div className="display__desktop">
          <div>
            <div className="first">
              <div className="heading ch">
                <h1>
                  Unlock The Value Of Your Data
                  <br />
                  at <span className="colorheading">10x Price Performance</span>
                  Advantage
                </h1>
              </div>
              <div className="description">
                <p>
                  Our platform centralizes all your data into one place and
                  offers easy access for data consumers. <br /> With an open
                  architecture, it ensures faster, reliable, and scalable data
                  analytics.
                </p>
              </div>
              <div className="first">

                <Banner />
                <Link to="*">
                  <div className="getstarted">
                    <a href="hi">Get Started</a>
                    <MySvg />
                  </div>
                </Link>
                <div className="grid">
                  <Grid />
                </div>
                <Companies />
              </div>
            </div>
            <div className="biggerellipse">
              <Ell />
            </div>
            <Cards />
          <Lake />
          <Pipeline />
          <Success />
          <FAQs />
          </div>
        </div>
   
      <div className="display__mobile">
        <div className="banner__component">
          <div className="banner__component__content">
            <h1 className="banner__heading">
              unlock The value of your data at 10x advantage
            </h1>
            <p>
              Upgrade your data analytics scaling now! Our advanced platform
              centralizes all your data into one source and offers easy access
              for data consumers. With an open architecture, it ensures faster,
              reliable, and scalable data solution deployment.
            </p>
            <Link to="*">
              <div className="getstarted__mob">
                <a href="hi">Get Started</a>
                <div className="banner__img">
                  <MySvg />
                </div>
              </div>
            </Link>
          </div>
    
          <Banner />
          <Companies />
        </div>
        <Cards />
      <Lake />
      <Pipeline />
      <Success />
      <FAQs />
      </div>
    </>
  );
};

export default Home;
