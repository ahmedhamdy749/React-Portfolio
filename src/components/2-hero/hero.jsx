import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../src/animation/dev.json";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./AhmedHamdy.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Fullstack Software developer, Python and Java Script{" "}
        </h1>
        <p className="subtitle">
          Highly motivated and detail-oriented Python back-end developer with a
          strong passion for web development. Solid foundation in Python
          programming and web frameworks. Eager to contribute skills in back-end
          development, database management, and problem-solving to support the
          development of scalable and efficient web applications.
        </p>
        <div className="icons flex">
          <div className="icon icon-twitter-square"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie 
        lottieRef = {lottieRef}
        onLoadedImages={() => {
          // @ts-ignore
          lottieRef.current.setSpeed(0.5);
          
          
        }
        }
        className=""

         animationData={devAnimation} />
      </div>
    </section>
  );
}
