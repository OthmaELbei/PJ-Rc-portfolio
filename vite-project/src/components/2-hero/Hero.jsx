import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero flex ">
      <div className="section-left">
        <div className="parent-avatar flex">
          <img src="./I-am.jpeg" className="avter" alt=""></img>
          <span className="icon-verified"></span>
        </div>
        <h1 className="titel">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="sup-titel">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-linkedin-square"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-instagram"></div>
        </div>
      </div>
      <div className="section-right">ifjpmù;</div>
    </section>
  );
}

export default Hero;
