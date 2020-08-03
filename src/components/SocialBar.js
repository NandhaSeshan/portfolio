import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./SocialBar.css";

export const SocialBar = () => (
  <div className="social_bar">
    <a
      id="social_button"
      href="https://github.com/NandhaSeshan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHubIcon fontSize="large" id="social_icons" />
    </a>
    <a
      id="social_button"
      href="https://www.linkedin.com/in/nandhaseshan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon fontSize="large" id="social_icons" />
    </a>

    <a
      id="social_button"
      href="https://www.instagram.com/blackesto__/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon fontSize="large" id="social_icons" />
    </a>
    <a
      id="social_button"
      href="https://www.facebook.com/blackesto"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon fontSize="large" id="social_icons" />
    </a>
  </div>
);

export default SocialBar;
