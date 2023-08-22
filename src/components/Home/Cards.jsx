import React from "react";
import Card1 from "../../assets/Images/card1.png";
import Dot from "../../assets/Ellipse.svg";
import Circle2 from "../../assets/circleflare.svg";
import Circle from "../../assets/Images/circle.png";

import Embark from "../../assets/Cards/Embark.svg";
import Effortless from "../../assets/Cards/Effortless.svg";
import Noshow from "../../assets/Cards/Noshow.svg";
import Prioritize from "../../assets/Cards/Table.svg";
import Disagreement from "../../assets/Cards/Disagreement.svg";
import { Link } from "react-router-dom";

const C1 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Embark} className="cc" />
      </div>
      <div className="text">
        <div className="subs">
          <div className="subbox">
            <p className="ch">Near Real-time</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">No Code</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">60% Efficient</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Encrypt PII</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Auto Schema</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            Embark on your data journey
            <br />
            with
            <span
              className="colorheading"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              FIBER
            </span>
            Platform.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Ingest data from 100+ sources in near real-time. Transform your data
          into analytics-ready format within minutes using our intuitive no-code
          UI. Say goodbye to biased and black-box solutions. Enjoy zero
          downtime, unparalleled automation, and virtually zero maintenance.
          Streamline your data process with our powerful platform.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const C2 = () => {
  return (
    <div className="cards">
      {" "}
      <div className="text">
        <div className="subs">
          <div className="subbox">
            <p className="ch">Single-copy architecture</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Normalized</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Compact</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Encrypted</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            Effortlessly centralise & streamline data for <br />
            seamless management.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Break free from data silos, and embrace the Lakehouse revolution to
          create a single source of truth. Our single-copy architecture empowers
          lightning-fast analytical queries, while open storage formats ensure
          seamless interoperability across your data ecosystem.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
      <div className="images no-left">
        <img src={Effortless} className="cc" />
      </div>
    </div>
  );
};

const C3 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Noshow} className="cc" />
      </div>
      <div className="text">
        <div className="subs">
          <div className="subbox">
            <p className="ch">Ad-hoc Query</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Sub-milli Second Latency</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Query data in transit</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>No Show Never Happens. Query engine that autoscales.</h1>
          <br />
        </div>
        <div className="content__para paras">
          Unlock actionable insights with a centralized metrics layer for
          reliable data consumption. Our separate compute and storage
          architecture ensures auto-scalability with the ability to shrink back
          and minimize redundancy.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const C4 = () => {
  return (
    <div className="cards">
      <div className="text">
        <div className="subs">
          <div className="subbox">
            <p className="ch">In VPC Deployment</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Access Control</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Mask & Anonymize Column and Row Level data</p>
          </div>
        </div>
        <div className="headings ch ">
          <h1>
            Prioritise Data Security.
            <br />
            Streamline your data flows with our platform.{" "}
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Enhance data security with a dedicated VPC deployment tailored to your
          specific requirements. Implement RBAC control for team access and
          ensure data protection. Safeguard against data breaches by masking and
          anonymizing data.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
      <div className="images">
        <img src={Prioritize} className="cc" />
      </div>
    </div>
  );
};

const C5 = () => {
  return (
    <div className="cards">
      <div className="images">
        <img src={Disagreement} className="cc" />
      </div>
      <div className="text">
        <div className="subs">
          <div className="subbox">
            <p className="ch">One-Source-One-Pipeline</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Ingestion Observability</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">GitOps enabled</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>Reduce data diasgreement. Foster team Collaboration.</h1>
          <br />
        </div>
        <div className="content__para paras">
          Collaborate with your team to build data pipelines seamlessly.
          Leverage the semantics layer to enhance data understanding for
          stakeholders and minimize redundant pipelines. Stay in control with
          the Gitops engine for version control, ensuring project progress from
          ideation to implementation. Achieve true collaboration and efficient
          data pipeline management with our platform.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const CM1 = () => {
  return (
    <div className="mob__card__container">
      <div className="image__mob">
        <img src={Embark} className="cc mm" />
      </div>
      <div className="text__mob">
        <div className="subs__mob">
          <div className="subbox">
            <p className="ch">Near Real-time</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">No Code</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">60% Efficient</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Encrypt PII</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Auto Schema</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            Embark on your data journey
            <br />
            with
            <span
              className="colorheading"
              style={{
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              FIBER
            </span>
            Platform.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Ingest data from 100+ sources in near real-time. Transform your data
          into analytics-ready format within minutes using our intuitive no-code
          UI. Say goodbye to biased and black-box solutions. Enjoy zero
          downtime, unparalleled automation, and virtually zero maintenance.
          Streamline your data process with our powerful platform.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const CM2 = () => {
  return (
    <div className="mob__card__container">
      <div className="image__mob">
        <img src={Effortless} className="cc mm" />
      </div>
      <div className="text__mob">
      <div className="subs__mob">
          <div className="subbox">
            <p className="ch">Single-copy architecture</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Normalized</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Compact</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Encrypted</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            Effortlessly centralize and streamline data for seamless management.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Break free from data silos, and embrace the Lakehouse revolution to
          create a single source of truth. Our single-copy architecture empowers
          lightning-fast analytical queries, while open storage formats ensure
          seamless interoperability across your data ecosystem.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const CM3 = () => {
  return (
    <div className="mob__card__container">
      <div className="image__mob">
        <img src={Noshow} className="cc mm" />
      </div>
      <div className="text__mob">
      <div className="subs__mob">
          <div className="subbox">
            <p className="ch">Ad-hoc Query</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Sub-milli Second Latency</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Query data in transit</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            No Show Never Happens. Query engine that never fails to deliver.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Unlock actionable insights with a centralized metrics layer for
          reliable data consumption. Our separate compute and storage
          architecture ensures auto-scalability with the ability to shrink back
          and minimize redundancy.{" "}
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const CM4 = () => {
  return (
    <div className="mob__card__container">
      <div className="image__mob">
        <img src={Prioritize} className="cc mm" />
      </div>
      <div className="text__mob">
      <div className="subs__mob">
          <div className="subbox">
            <p className="ch">One-Source-One-Pipeline</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Ingestion Observability</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">GitOps enabled</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>
            Priortize Data Security. Streamline your data flows with our
            platform.
          </h1>
          <br />
        </div>
        <div className="content__para paras">
          Enhance data security with a dedicated VPC deployment tailored to your
          specific requirements. Implement RBAC control for team access and
          ensure data protection. Safeguard against data breaches by masking and
          anonymizing data.
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const CM5 = () => {
  return (
    <div className="mob__card__container">
      <div className="image__mob">
        <img src={Disagreement} className="cc mm" />
      </div>
      <div className="text__mob">
      <div className="subs__mob">
          <div className="subbox">
            <p className="ch">One-Source-One-Pipeline</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">Ingestion Observability</p>
          </div>
          <img src={Dot} alt="" />
          <div className="subbox">
            <p className="ch">GitOps enabled</p>
          </div>
        </div>
        <div className="headings ch">
          <h1>Reduce Data Disagreement. Foster Team Collaboration.</h1>
          <br />
        </div>
        <div className="content__para paras">
          Collaborate with your team to build data pipelines seamlessly.
          Leverage the semantics layer to enhance data understanding for
          stakeholders and minimize redundant pipelines. Stay in control with
          the Gitops engine for version control, ensuring project progress from
          ideation to implementation. Achieve true collaboration and efficient
          data pipeline management with our platform.{" "}
        </div>
        <Link to="*">
          <button className="know__more">
            <span>Know more</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <div className="display__desktop">
        <div
          className="firstw"
          style={{
            position: "relative",
          }}
        >
          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
              marginTop: "50rem",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
              marginTop: "70rem",
              left: "-20rem",
            }}
          />
        </div>
        <div
          className="first"
          style={{
            paddingBottom: "100px",
            position: "relative",
          }}
        >
          <C1 />
          <C2 />
          <C3 />

          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
              right: "-10rem",
              marginTop: "7rem",
            }}
          />

          <C4 />
          <C5 />
        </div>
        <div
          className="firstw"
          style={{
            position: "relative",
          }}
        >
          <img
            src={Circle}
            alt=""
            style={{
              position: "absolute",
              zIndex: "-1",
            }}
          />
        </div>
      </div>
      <div className="display__mobile">
        <div className="cards__mob">
          <CM1 />
          <CM2 />
          <CM3 />
          <CM4 />
          <CM5 />
        </div>
      </div>
    </>
  );
};

export default Cards;
