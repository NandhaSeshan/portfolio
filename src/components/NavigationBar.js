import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavigationBar.css";

export const NavigationBar = () => (
  <Navbar id="navbar" expand="lg" sticky="top">
    <Navbar.Brand id="logo" href="/">
      Blackesto
    </Navbar.Brand>

    <Navbar.Collapse className="justify-content-end" id="responsive-Navbar-nav">
      <Nav collapseOnSelect={true}>
        <Nav.Link href="#home" id="nav-link">
          Home
        </Nav.Link>
        <Nav.Link href="#contact" id="nav-link">
          Contact Me
        </Nav.Link>
        <Nav.Link href="#about" id="nav-link">
          About
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
