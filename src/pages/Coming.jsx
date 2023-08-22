import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Coming = () => {
    // const blobRef = useRef(null);
    // const handlePointerMove = (event) => {
    //   const { clientX, clientY } = event;
    //   blobRef.current.style.left = `${clientX}px`;
    //   blobRef.current.style.top = `${clientY}px`;
    //   blobRef.current.animate(
    //     {
    //       left: `${clientX}px`,
    //       top: `${clientY}px`,
    //     },
    //     {
    //       duration: 3000,
    //       fill: 'forwards',
    //     }
    //   );
    // };
    // React.useEffect(() => {
    //   document.body.addEventListener('pointermove', handlePointerMove);
    //   return () => {
    //     document.body.removeEventListener('pointermove', handlePointerMove);
    //   };
    // }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, [])
  
  return (
    <div>
      <div className="display__desktop">
        <div className="first"> 
        {/* <div ref={blobRef}
        id="blob"
        className="blob"></div>
<div id="blob-blur"></div> */}
          <div className="coming__component">
            <h3 className="uc">#UnderConstruction</h3>
            <h1 className="cs">Coming soon</h1>
            <center>
              <p>
                We're building a powerful Data Engineering Platform to unleash
                the true potential of your data. Stay tuned for the big reveal!
              </p>
            </center>
          </div>
          <div className="coming__cta">
            <center>
              <span>
                <span>For more Updates: </span>
                <b>

                <a href="mailto:connect@dview.io">Connect@dview.io</a>
                </b>
              </span>
              <Link to="/">

              <button className="know__more comingbtn">Go to Homepage</button>
              </Link>
            </center>
          </div>
        </div>
      </div>
      <div className="display__mobile">
        <div className="first">
          <div className="coming__component__mob">
            <h3 className="ucm">#UnderConstruction</h3>
            <h1 className="csm">Coming 
            <br />
            Soon</h1>
              <p>
                We're building a powerful Data Engineering Platform to unleash
                the true potential of your data. Stay tuned for the big reveal!
              </p>
          </div>
          <div className="coming__cta__mob">
          

            <span>
                <span>For more Updates: </span>
                <b>

                <a href="mailto:connect@dview.io">Connect@dview.io</a>
                </b>
              </span>
       
              <Link to="/">

              <button className="know__more comingbtn__mob">Go to Homepage</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coming;
