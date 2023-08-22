import React from "react";
import Mask2 from "../../assets/Mask2.svg";
import Circle from "../../assets/Images/circle.png";
import Picon from "../../assets/pipeline__icon.svg";
import { Link } from "react-router-dom";

const Pbox = ({ ph, pd, pa }) => {
  return (
    <div className="pbox">
      <img src={Picon} alt="" />
      <h4 className="plheading">{ph}</h4>
      <p className="pldescription">{pd}</p>
      <Link to="*">
        <div className="plbutton">
          <a>Know More</a>
        </div>{" "}
      </Link>
    </div>
  );
};

const Pmbox = ({ ph, pd, pa }) => {
  return (
    <div className="pp__mob__boxes">
      <img
        src={Picon}
        style={{
          width: "5rem",
          height: "5rem",
        }}
        alt=""
      />
      <h4>{ph}</h4>
      <p>{pd}</p>
      <div className="pp__mob__btn">
        <p className="">Know More</p>
      </div>
    </div>
  );
};

const Pipeline = () => {
  return (
    <div>
      <div className="display__desktop">
        <div
          className="firstw"
          style={{
            position: "relative",
          }}
        >
          <img
            src={Mask2}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
              top: "0",
            }}
          />
          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-2",
              right: "-25rem",
              top: "-20rem",
              maxWidth: "100%",
            }}
          />
        </div>
        <div className="first">
          <div className="pipeline ch">
            <h2 className="pheading ">
              Power Data Applications using Dview's Unified Platform
            </h2>
          </div>
          <div className="pmain">
            <div className="pcontent">
              <Pbox
                ph="Real-time Personalised Experience"
                pd="Deploy data products that can dynamically adapt to user behaviors and preferences. Power real-time personalised experience, tailor every interaction, and elevating engagement."
                pa="Realtime data"
              />
              <Pbox
                ph="Advanced Fraud Detection System"
                pd="Intercept eventing data while on flight. Query data and detect anomalies to power fraud detection system built on advanced algorithms and AI insights."
                pa="Realtime data"
              />
            </div>

            <div className="pcontent">
              <Pbox
                ph="Rule-based Notification Engine"
                pd="Proactive communication is key. Dview’s open architecture enables easy deployment of rule based alerts on real-time data to empower prompt decision-making."
                pa="Realtime data"
              />
              <Pbox
                ph="Data Quality Assurance Engine"
                pd="Transform your raw data into actionable insights. Our platform helps you refining information by removing redundancies and ensuring high data up-time."
                pa="Realtime data"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="pp__mob">
          <h2>
            Unified Data Platform
            <br />
            Powered by Dview's
            <br />
            Data Pipeline Engine.
          </h2>
          <Pmbox
            ph="Real-time Personalised Experience"
            pd="Dview enables data engineers to deploy data products that can dynamically adapt to user behaviors and preferences. Power real-time personalised experience, tailor every interaction, enhancing satisfaction and elevating engagement."
            pa="Realtime data"
          />
          <Pmbox
            ph="Advanced Fraud Detection System"
            pd="In a digital age of evolving threats, Dview's sophisticated fraud detection utilizes advanced algorithms and AI insights. We identify and counteract breaches, safeguarding your data."
            pa="Realtime data"
          />
          <Pmbox
            ph="Rule-based Notification Engine"
            pd="Proactive communication is key. Dview’s open architecture enables easy deployment of rule based alerts on real-time data to empower prompt decision-making."
            pa="Realtime data"
          />
          <Pmbox
            ph="Data Quality Assurance Engine"
            pd="Dview transforms raw data into actionable insights. Our engine refines information, removing redundancies, ensuring your strategies are underpinned by quality data.                "
            pa="Realtime data"
          />
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
