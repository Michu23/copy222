import React, { useState } from "react";
import "../../App.css";

import B1 from "../../assets/Hero/abc.svg";
import B2 from "../../assets/Hero/B2.svg";
import B3 from "../../assets/Hero/B3.svg";

import Group1 from "../../assets/Group1.svg";
import Group2 from "../../assets/Group2.svg";
import Group3 from "../../assets/Group3.svg";
import Group4 from "../../assets/Group4.svg";
import Group5 from "../../assets/Group5.svg";

import BB1 from "../../assets/Hero/BB1.svg";
import BB2 from "../../assets/Hero/BB2.svg";
import BB3 from "../../assets/Hero/BB3.svg";

const Banner = () => {
  const [card, setCard] = useState("");

  return (
    <div>
      <div className="display__desktop ">
        <div className="banner__web">
          <div className="b1">
            <img src={B1} alt="" />
          </div>
          <div className="b2">
            <img src={B2} alt="" />
            <div className="main__container">
              <div
                className="menu__container"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Ingestion");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c4 ">
                  <div>
                    <h3>Ingestion</h3>
                    {card === "Ingestion" && (
                      <p>
                        Automate the process of collecting data from over 100 sources in a no-code manner.
                      </p>
                    )}
                  </div>
                  <img src={Group4} className="img" alt="" />
                </div>
              </div>
              <div
                className="menu__container"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Data");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c5 ">
                  <div>
                    <h3>
                      Data
                      <br />
                      Modelling
                    </h3>
                    {card === "Data" && (
                      <p>
                        Effortlessly collaborate with your team to construct data models seamlessly. 
                      </p>
                    )}
                  </div>
                  <img src={Group5} className="img" alt="" />
                </div>
              </div>
              <div
                className="menu__container"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Caching");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c1">
                  <div>
                    <h3>Caching</h3>
                    {card === "Caching" && (
                      <p>
                        Enhance data access speed while optimizing expenses for scheduled queries.
                      </p>
                    )}
                  </div>
                  <img src={Group1} className="img" alt="" />
                </div>
              </div>
              <div
                className="menu__container"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Access");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c2">
                  <div>
                    <h3>
                      Access
                      <br />
                      Control
                    </h3>
                    {card === "Access" && (
                      <p>
                        Empower users to access data as needed, promoting a democratized data environment. 
                      </p>
                    )}
                  </div>
                  <img src={Group2} className="img" alt="" />
                </div>
              </div>
              <div
                className="menu__container"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("API");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c3 ">
                  <div>
                    <h3>API's</h3>
                    {card === "API" && (
                      <p>
                        Effortlessly deploy data products for streamlined data retrieval from a unified source of truth.
                      </p>
                    )}
                  </div>
                  <img src={Group3} className="img" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="b3">
            <img src={B3} alt="" />
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="banner__mobile">
          <div className="bb1">
            <img src={BB1} alt="" />
          </div>
          <div className="bb2">
            <img src={BB2} className="bb2img" alt="" />
            <div className="main__container__mm">
              <div
                className="menu__container__mm"
                onMouseEnter={() => {
                  setCard("Ingestion");
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c4 ">
                  <div>
                    <h3>Ingestion</h3>
                    {card === "Ingestion" && (
                      <p>
                       Automate the process of collecting data from over 100 sources in a no-code manner.
                     
                      </p>
                    )}
                  </div>
                  <img src={Group4} className="imgg" alt="" />
                </div>
              </div>
              <div
                className="menu__container__mm"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Data");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c5 ">
                  <div>
                    <h3>
                      Data
                      <br />
                      Modelling
                    </h3>
                    {card === "Data" && (
                      <p>
                        Effortlessly collaborate with your team to construct data models seamlessly. 
                      </p>
                    )}
                  </div>
                  <img src={Group5} className="imgg" alt="" />
                </div>
              </div>
              <div
                className="menu__container__mm"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Caching");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c1">
                  <div>
                    <h3>Caching</h3>
                    {card === "Caching" && (
                      <p>
                        Enhance data access speed while optimizing expenses for scheduled queries.
                      </p>
                    )}
                  </div>
                  <img src={Group1} className="imgg" alt="" />
                </div>
              </div>
              <div
                className="menu__container__mm"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("Access");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c2">
                  <div>
                    <h3>
                      Access
                      <br />
                      Control
                    </h3>
                    {card === "Access" && (
                      <p>
                        Empower users to access data as needed, promoting a democratized data environment. 
                      </p>
                    )}
                  </div>
                  <img src={Group2} className="imgg" alt="" />
                </div>
              </div>
              <div
                className="menu__container__mm"
                onMouseEnter={() => {
                  setTimeout(() => {
                    setCard("API");
                  }, 100);
                }}
                onMouseLeave={() => {
                  setCard("");
                }}
              >
                <div className="menu c3 ">
                  <div>
                    <h3>API's</h3>
                    {card === "API" && (
                      <p>
                        Effortlessly deploy data products for streamlined data retrieval from a unified source of truth.
                      </p>
                    )}
                  </div>
                  <img src={Group3} className="imgg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="bb3">
            <img src={BB3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
