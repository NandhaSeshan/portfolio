import React from "react";
import Fade from "react-reveal";
import Flash from "react-reveal";

import "./About.css";

export const About = () => (
  <div id="about">
    <div className="about_me">
      <Flash>
        <h1 id="page_heading">ME?</h1>
        <br />
        <br />
        <br />
      </Flash>
      <div id="page_content">
        <Fade right>
          <p>I'm a developer / web designer based in Bangalore, India.</p>
          <p>I have a passion for coding and love to create.</p>
        </Fade>
      </div>
    </div>
  </div>
);

export default About;
