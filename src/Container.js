import React from "react";
import Home from "./home/Home.js";
import About from "./about/About.js";
import NavigationBar from "./components/NavigationBar.js";
import SocialBar from "./components/SocialBar.js";

import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <>
        {/* <Canvas /> */}
        <div id="bg-image" />
        <NavigationBar />
        <SocialBar />
        <Home id="home" />
        <About id="about" />
        {/* <Contact id="contact" /> */}
      </>
    );
  }
}

export default Container;
