import React from "react";

import AWS from "../assets/Companies/AWS.svg";
import Pinterest from "../assets/Companies/Pinterest.svg";
import GCP from "../assets/Companies/GCP.svg";
import Spotify from "../assets/Companies/Spotify.svg";
import Stripe from "../assets/Companies/Stripe.svg";

import Azure from "../assets/Companies/Azure.svg";

const Companies = () => {
  const partnerLogos = [
    {
      img: AWS,
    },
    {
      img: Pinterest,
    },
    {
      img: GCP,
    },
    {
      img: Spotify,
    },
    {
      img: Stripe,
    },
  ];

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          {/* <div className="companies">
            <img src={AWS} alt="" />
            <img src={Pinterest} alt="" />
            <img src={GCP} alt="" />
            <img src={Spotify} alt="" />
            <img src={Stripe} alt="" />
            <img src={AWS} alt="" />
            <img src={Pinterest} alt="" />
            <img src={GCP} alt="" />
          </div> */}
          <div
            className="logos"
            style={{
              marginTop: "-90rem",
            }}
          >
            <div className="logos-slide">
              <img src={AWS} />
              <img src={Azure} style={{ width: '160px', height: 'auto', marginBottom: '10px'}} alt="" />
              <img src={GCP} alt="" />
              <img src={AWS} alt="" />
              <img src={Azure} style={{ width: '160px', height: 'auto', marginBottom: '10px'}} alt="" />
              <img src={GCP} alt="" />
            </div>

            <div className="logos-slide">
              <img src={AWS} />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />
              <img src={GCP} alt="" />
              <img src={AWS} alt="" />
              <img src={Azure} alt="" />
              <img src={GCP} alt="" />
            </div>
            <div className="logos-slide">
              <img src={AWS} />
              <img src={Azure} style={{ width: '160px', height: 'auto', marginBottom: '10px'}} alt="" />
              <img src={GCP} alt="" />
              <img src={AWS} alt="" />
              <img src={Azure} style={{ width: '160px', height: 'auto', marginBottom: '10px'}} alt="" />
              <img src={GCP} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
      <div
            className="logos"
        
          >
            <div className="logos-slide">
              <img src={AWS} />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
              <img src={AWS} alt="" />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
            </div>

            <div className="logos-slide">
              <img src={AWS} />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
            
              <img src={AWS} alt="" />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
            </div>
            <div className="logos-slide">
              <img src={AWS} />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
            
              <img src={AWS} alt="" />
              <img style={{ width: '160px', height: 'auto', marginBottom: '10px'}} src={Azure} alt="" />

              <img src={GCP} alt="" />
            </div>
          </div>
      </div>
    </>
  );
};

export default Companies;
