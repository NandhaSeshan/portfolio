import React from "react";
import Fade from "react-reveal";
import Flash from "react-reveal";
import Logo from "../images/pngegg.png";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import BrushIcon from "@material-ui/icons/Brush";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

import "./About.css";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <div className="about_me">
            <div id="page_heading">
              <Flash>
                <Typography variant="p">About ME?</Typography>
              </Flash>
            </div>
            <div id="thanos_gauntlet">
              <img src={Logo} alt="hand_img" className="image" />
            </div>
            <div id="page_content1">
              <Fade left>
                <CodeIcon fontSize="large" />
                <Typography variant="p">A developer / web designer</Typography>
              </Fade>
            </div>
            <div id="page_content2">
              <Fade right>
                <CameraAltIcon fontSize="large" />
                <Typography variant="p">A budding photographer</Typography>
              </Fade>
            </div>
            <div id="page_content3">
              <Fade right>
                <BrushIcon fontSize="large" />
                <Typography variant="p">Art enthusiast</Typography>
              </Fade>
            </div>
            <div id="page_content4">
              <Fade left>
                <MusicNoteIcon fontSize="large" />
                <Typography variant="p">Amatuer singer</Typography>
              </Fade>
            </div>
            <div id="page_content5">
              <Fade bottom>
                <DirectionsRunIcon fontSize="large" />
                <Typography variant="p">Fittness enthusiast</Typography>
              </Fade>
            </div>
            <div id="page_content6">
              <Fade bottom>
                <SportsSoccerIcon fontSize="large" />
                <Typography variant="p">Amatuer footballer</Typography>
              </Fade>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
