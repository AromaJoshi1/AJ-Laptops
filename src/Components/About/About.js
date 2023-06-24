import React from "react";
import "./About.css";
import Button from "react-bootstrap/Button";
import aeb from "./aboutImg.jpg";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to  About page"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      // smartBackspace: true,
      // loop: true,
      // showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section id="header">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10-mx-auto ">
              <div className="row ">
                <div
                  id="tagline"
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column "
                >
                  <h1 className="h2">
                    <span className="brand-name" ref={el}></span>
                  </h1>
                  
                  <h2 className="my-3 h3">
                    We are the team of talented developer who provides high
                    quality products & services.
                  </h2>

                  <div className="mt-3">
                    <Link exact to="/Contact">
                      <Button className="btn-get-started">Contact Now</Button>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={aeb} className="image-fluid " alt="home img" />
                </div>
                {/* below div is for row end         */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
