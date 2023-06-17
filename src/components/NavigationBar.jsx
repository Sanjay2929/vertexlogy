import pagelogo from "../assets/img/webp/siteLogo.webp";
import React from "react";
import { Container } from "react-bootstrap-v5";

const NavigationBar = () => {
  return (
    <div>
      <nav className="py-4">
        <Container className="d-flex justify-content-between align-items-center ">
          <img width={"143px"} src={pagelogo} alt="logo" />
          <ul className="ps-0 mb-0 d-flex align-items-center gap_32">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default NavigationBar;
