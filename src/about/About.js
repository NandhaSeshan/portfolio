import React from "react";
import Fade from "react-reveal";
import Flash from "react-reveal";
import Logo from "../images/pngegg.png";

import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="about_me">
          <div id="page_heading">
            <Flash>
              <h1>About ME?</h1>
            </Flash>
          </div>
          <div id="thanos_gauntlet">
            <img src={Logo} alt="hand_img" className="image" />
          </div>
          <div id="page_content1">
            <Fade left>
              <p>A developer / web designer</p>
            </Fade>
          </div>
          <div id="page_content2">
            <Fade right>
              <p>A budding photographer</p>
            </Fade>
          </div>
          <div id="page_content3">
            <Fade right>
              <p>Art enthusiast</p>
            </Fade>
          </div>
          <div id="page_content4">
            <Fade bottom>
              <p>Amatuer singer</p>
            </Fade>
          </div>
          <div id="page_content5">
            <Fade left>
              <p>Fittness enthusiast</p>
            </Fade>
          </div>
          <div id="page_content6">
            <Fade bottom>
              <p>Amatuer footballer</p>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
