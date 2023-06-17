import pagelogo from "../assets/img/webp/siteLogo.webp";
import React, { useState } from "react";
import { Container } from "react-bootstrap-v5";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const NavigationBar = () => {
  const [show, setshow] = useState(true);
  function showUl() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="py-4">
        <Container className="d-flex justify-content-between align-items-center">
          <img className="z_51 siteLogo" src={pagelogo} alt="logo" />
          <ul
            className={`ps-0 mb-0 d-flex align-items-center gap_32 NavList ${
              show ? "" : "start-0"
            }`}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <div onClick={showUl} className="d-sm-none d-block z_50">
            <h2 className=" text-white fs_lg position-relative z_51">
              {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavigationBar;
