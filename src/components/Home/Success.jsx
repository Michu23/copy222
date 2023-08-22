import React, { useEffect, useRef, useState } from "react";
import Left from "../../assets/leftarrow.svg";
import Right from "../../assets/rightarrow.svg";
import Pro from "../../assets/Success/Brittany.jpeg";
import Pro2 from "../../assets/Success/GearX.jpeg";
import Nikunj from "../../assets/Success/Nikunj.jpeg";
import Ajith from "../../assets/Success/Ajith.webp";
import Swetha from "../../assets/Success/Swetha.jpeg";

const Success = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
const intervalRef = useRef(null);


  const scrollToRight = () => {
    console.log("Scroll to right");
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 800; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollTo(container, targetScrollLeft, duration);
    }
  };
  const scrollToLeft = () => {
    const container = containerRef.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 800; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollTo(container, targetScrollLeft, duration);
    }
  };

  const smoothScrollTo = (element, targetScrollLeft, duration) => {
    console.log("Smooth scroll");
    const startScrollLeft = element.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollFraction = progress / duration;
      const scrollLeft = startScrollLeft + distance * scrollFraction;

      element.scrollLeft = scrollLeft;

      if (progress < duration) {
        // Continue smooth scrolling
        requestAnimationFrame(step);
      }
    };

    // Start the smooth scrolling animation
    requestAnimationFrame(step);
  };

  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStartX) return;

    const container = containerRef2.current;
    if (!container) return;

    const touchCurrentX = e.touches[0].clientX;
    const touchDeltaX = touchCurrentX - touchStartX;
    container.scrollLeft -= touchDeltaX;

    setTouchStartX(touchCurrentX);
  };

  const handleScroll = (e) => {
    if (containerRef.current) {
        const { scrollTop } = e.currentTarget;
        containerRef.current.scrollLeft += scrollTop;
        e.currentTarget.scrollTop = 0;  // Reset the vertical scroll position
    }
};

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const scrollToRightt = () => {
    const container = containerRef2.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft + 420; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollToo(container, targetScrollLeft, duration);
    }
  };



  const scrollToLeftt = () => {
    const container = containerRef2.current;
    if (container) {
      const targetScrollLeft = container.scrollLeft - 420; // Calculate the target scroll position
      const duration = 500; // Set the duration for the smooth scroll (in milliseconds)
      smoothScrollToo(container, targetScrollLeft, duration);
    }
  };

  const smoothScrollToo = (element, targetScrollLeft, duration) => {
    const startScrollLeft = element.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const scrollFraction = progress / duration;
      const scrollLeft = startScrollLeft + distance * scrollFraction;

      element.scrollLeft = scrollLeft;

      if (progress < duration) {
        // Continue smooth scrolling
        requestAnimationFrame(step);
      }
    };

    // Start the smooth scrolling animation
    requestAnimationFrame(step);
  };

  const prevScrollY = useRef(window.scrollY);

  // useEffect(() => {
  //   const handleWindowScroll = (e) => {
  //     if (prevScrollY.current < window.scrollY) {
  //       scrollToRight();
  //     } else if (prevScrollY.current > window.scrollY) {
  //       scrollToLeft();
  //     }
  //     prevScrollY.current = window.scrollY;
  //   };
  //   window.addEventListener('scroll', handleWindowScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleWindowScroll);
  //   };
  // }, []);

  useEffect(() => {
    const scrollInterval = 10;  // Adjust the interval for smoother/faster scroll
    const scrollAmount = 1;    // Adjust the amount of scroll for each interval

    // const doScroll = () => {
    //     const container = containerRef.current;
    //     if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    //         // If we've reached the end of content, reset scrollLeft to the beginning.
    //         container.scrollLeft = 0;
    //     } else {
    //         container.scrollLeft += scrollAmount;
    //     }
    // };
    const doScroll = () => {
      const container = containerRef.current;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          // If we've reached the end of content, reset scrollLeft to the beginning.
          container.scrollLeft = 0;
      } else {
          container.scrollLeft += scrollAmount;
      }
  };
    if (!isHovered) {
        intervalRef.current = setInterval(doScroll, scrollInterval);
    }
    return () => {
        clearInterval(intervalRef.current);
    };
}, [isHovered]);

  const successStories = [
    {
      heading:
        "Dview revolutionized our Analytics! From Spreadsheets to Dynamic Dashboards",
      para: "Transitioning from spreadsheets to real-time dashboards was a game-changer for us, leading to significant time savings and reduced cloud costs. Dview facilitated this seamless shift promptly, and their exceptional customer support further convinced us to opt for the upfront payment of the yearly fee.",
      img: Pro2,
      name: "Madhu S Naidu",
      position: "Founder,\nGearX, US",
      percentage: "50%",
      ratetext: "Reduction in time from raw data to insights on a dashboard.",
    },
    {
      heading:
        "A One-Click Solution to Swift Decision Making",
      para: "In the past, we spent a day manually downloading and filtering Excel data from our database for crucial information. Now, with Dview platform, it's a one-click custom query engine and real-time analytics dashboards, making us more responsive to customers and proactive in addressing potential issues.",
      img: Pro,
      name: "Brittany B.",
      position: "Key Account Manager, \nAH Group, US",
      percentage: "30%",
      ratetext: "Increase in Customer Response Time which led to increased C-SAT score",
    },
    {
      heading:
        "From Daunting Security Tasks to Secure, Swift Solutions",
      para: "We need robust encryption and decryption with granular access control of over 10 million records on a daily basis, for various analytical purposes. We always found it a daunting task, leading to bottlenecks, time lags and potential security risks. With DView’s platform, we could see it happen in just 20 seconds, with absolute security. It’s a gamechanger for organizations that are working in highly regulated environments.",
      img: Nikunj,
      name: "Nikunj Agarwal",
      position: "CTO,\nChqbook",
      percentage: "80%",
      ratetext: "Reduction in time to query encrypted sensitive data",
    },
    {
      heading:
        "Fast, Reliable Data Ingestion Transforms Our Workflow",
      para: "Dview’s platform has been a game-changer for us. It seamlessly facilitated the transfer of massive data from ScyllaDB to a centralized data lake, surpassing our expectations. It’s remarkably fast and reliable ingestion process outshined the performance of conventional open-source connectors. What’s truly commendable is their open architecture, which empowered us to swiftly deploy data products. Dview has undeniably helped us saving time, costs and enhancing reliability.",
      img: Ajith,
      name: "Ajith Prathap",
      position: "Engineering Manager, Threedots",
      percentage: "35%",
      ratetext: "Increase in ingestion speed, reduced data downtime and enabled faster deployment of data products",
    },
    {
      heading:
        "Dview: The Gold Standard for Scalable Analytics",
      para: "Dview effectively demonstrated deployment of data pipelines that scale across multiple clouds. Their platform has checkpointing, auto schema, and CDC which is significantly faster thus reducing data downtime without overloading primary databases. Their solution offers a higher refresh rate for a lower direct/indirect cost over our current pipeline SaaS. This positions them as the preferred solution for organizations seeking to scale their analytics.",
      img: Swetha,
      name: "Swetha T.",
      position: "CTO, Fanclash",
      percentage: "45%",
      ratetext: "Efficient pipelines, lower costs, and faster analytics.",
    },
  ];

  return (
    <>
      <div className="display__desktop">
        <div className="first">
          <div className="success">
            <div className="scontent">
              <div className="stop">
                <h2 className="sheading">Success Stories</h2>
                <div className="snav">
                  <img src={Right} className="left" alt="" onClick={scrollToLeft} />
                  <img src={Right} alt="" onClick={scrollToRight} />
                </div>
              </div>
            </div>
            <div
              className="stories"
              // style={{ whiteSpace: "nowrap" }}
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
            >
              {successStories.map((story, index) => {
                return (
                  <div className="story">
                    <div className="storytext">
                      <h2 className="storyheading">{story.heading}</h2>
                      <div className="textbox">
                        <p className="storytexts">{story.para}</p>
                      </div>
                      <hr className="shr" />
                      <div className="rating">
                        <div className="rating__people">
                          <img src={story.img} alt="" />
                          <div className="ratinginfo">
                            <h6 className="ratingname">{story.name}</h6>
                            <p className="ratingrole">{story.position}</p>
                          </div>
                        </div>
                        <div className="star__rating">
                          <h3 className="spercentage">{story.percentage}</h3>
                          <p className="scontent">
                            {story.ratetext}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            
              <div
                style={{
                  padding: "1.5rem",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="display__mobile">
        <div className="success__mob">
          <h2>Success Stories</h2>

          <div
            ref={containerRef2}
            className="mob__success__box__container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {successStories.map((story, index) => {
              return (
                <div className="success__mob__boxes">
                  <div className="mob__box__content">
                    <h4>
                      {story.heading}
                    </h4>
                    <p>{story.para}</p>
                    <hr />
                    <div className="mob__rating">
                      <div className="mob__perc">
                        <h4>{story.percentage}</h4>
                      </div>
                      <div className="rating__content">
                        <p>
                          {story.ratetext}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="mob__success__profile">
                      <img src={story.img} alt="" />
                      <div className="ratinginfo">
                        <h6 className="ratingname">{story.name}</h6>
                        <p className="ratingrole">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {successStories.map((story, index) => {
              return (
                <div className="success__mob__boxes">
                  <div className="mob__box__content">
                    <h4>
                      Positioning our brand by highlighting success stories that
                      back
                    </h4>
                    <p>{story.para}</p>
                    <hr />

                    <div className="mob__rating">
                      <div className="mob__perc">
                        <h4>50%</h4>
                      </div>
                      <div className="rating__content">
                        <p>
                          Reduction in time from raw data to insights on a
                          dashboard
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="mob__success__profile">
                      <img src={story.img} alt="" />
                      <div className="ratinginfo">
                        <h6 className="ratingname">{story.name}</h6>
                        <p className="ratingrole">{story.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="snav__mob">
            <img src={Left} alt="" onClick={scrollToLeftt} />
            <img src={Right} onClick={scrollToRightt} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
