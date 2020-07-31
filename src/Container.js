import React from "react";
import Home from "./home/Home.js";
import About from "./about/About.js";
import Contact from "./contact/Contact.js";
import NavigationBar from "./components/NavigationBar.js";

import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <>
        {/* <Canvas /> */}
        <div id="bg-image" />
        <NavigationBar />

        <Home id="home" />
        <About id="about" />
        {/* <Contact id="contact" /> */}
      </>
    );
  }
}

export default Container;
