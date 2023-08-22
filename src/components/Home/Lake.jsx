import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../assets/Pagination.svg";
import Video from "../../assets/dview.mp4";
import GIF from "../../assets/dview.gif";

const Lake = () => {
  const [expand, setExpand] = useState("fiber");
  const videoRef = useRef(null);
  const lakeboxRef = useRef(null);
  const [scrollingDown, setScrollingDown] = useState(true);



 useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-250px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setScrollingDown(true);
        } else {
          setScrollingDown(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (lakeboxRef.current) {
      observer.observe(lakeboxRef.current);
    }

    return () => {
      if (lakeboxRef.current) {
        observer.unobserve(lakeboxRef.current);
      }
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const targetMiddle = lakeboxRef.current.offsetTop + (lakeboxRef.current.offsetHeight / 2);
      const viewportMiddle = window.innerHeight / 3;

      if (scrollingDown && targetMiddle > viewportMiddle) {
        setExpand("aqua");
      } else {
        setExpand("fiber");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDown]);


  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="datalake">
            <div className="lakecontent">
              <h2>
                Effortlessly Build <br />
                Your Data Lake
              </h2>
              <div className="lakedown">
                <div className="ldf">
                  <div className="ldf__content" >
                    <div
                      className={`cp lakeboxes ${
                        expand === "fiber" ? "fiber expanded " : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("fiber");
                      }}
                    >
                      <h4>Fiber</h4>
                      <p>
                        Data Pipeline that effortlessly ingests structured,
                        semi-structured and unstructured data from Web Logs,
                        Databases, Social Media, Cloud Applications into a
                        unified Data Lake in minutes.
                      </p>
                    </div>
                    <div
                      className={` cp lakeboxes ${
                        expand === "aqua" ? "fiber expanded" : "aqua"
                      }`}
                      onClick={() => {
                        setExpand("aqua");
                      }}
                      ref={lakeboxRef}
                    >
                      <h4>Aqua</h4>
                      
                      <p>
                        Query Engine that auto scales with your analytics
                        workload and shrinks back when load minimises. Reduces
                        compute power. Blazingly fast access and purely access
                        controlled.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="udf">
                 

                  <video ref={videoRef} 
          className="udfimg"
          autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="lake__mob">
          <h1>
            Effortlessly Build
            <br />
            Your Data Lake
          </h1>
          <div
            className={`cp lake__boxes__mob ${
              expand === "fiber" ? "fiber expanded " : "aqua"
            }`}
            onClick={() => {
                setExpand("fiber");
              }}
          >
            <h4>Fiber</h4>
            {
                        expand === "fiber" ?   <p>
                        Data Pipeline that effortlessly ingests structured,
              semi-structured and unstructured data from Web Logs, Databases,
              Social Media, Cloud Applications into a unified Data Lake in
              minutes.
                      </p> : ""
                      }
         
          </div>
          <div
            className={`cp lake__boxes__mob ${
              expand === "aqua" ? "fiber expanded " : "aqua"
            }`}
            onClick={() => {
                setExpand("aqua");
              }}
          >
            <h4>Aqua</h4>
            {
                        expand === "aqua" ?   <p>
                        Query Engine that auto scales with your analytics
                        workload and shrinks back when load minimises. Reduces
                        compute power. Blazingly fast access and purely access
                        controlled.
                      </p> : ""
                      }
          </div>
          {/* <img src={Pagination} className="lake__img__mob" alt="" /> */}
          {/* <video src={Video} style={{
            width: '100vw',
          }}></video> */}
          {/* <video ref={videoRef} 
          style={{
            width: '100vw',
          }}
          autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video> */}
      <img
      style={{
        width: '100vw',
      }}
      src={GIF} alt="" />
        </div>
      </div>
    </>
  );
};

export default Lake;
