import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap-v5";
import logo from "../assets/img/png/siteLogo.png";
import insta_1 from "../assets/img/svg/insta_1.svg";
import be_2 from "../assets/img/svg/be_2.svg";
import you_3 from "../assets/img/svg/you_3.svg";
import fb_4 from "../assets/img/svg/fb_5.svg";
import twe_5 from "../assets/img/svg/twe_7.svg";
import in_6 from "../assets/img/svg/in_8.svg";
import footer_back from "../assets/img/svg/footer_back.svg";
import bottom_design from "../assets/img/svg/footer_bottom.svg";
import { OrangeBtn } from "./OrangeBtn";
export const Footer = () => {
  return (
    <div className=" position-relative">
      <span className=" position-absolute end-0 me-5 bottom-0 section_2_side_animation mb-5 pb-4">
        <img src={bottom_design} alt="bottom_design" className="w-100" />
      </span>
      <span className=" position-absolute section_2_side_animation start-0 ms-5 d-none d-sm-block v top-0 mt-5">
        <img src={bottom_design} alt="bottom_design" className="w-100" />
      </span>
      <Container className=" position-relative">
        <span className=" position-absolute footer_back_1 section_2_side_animation">
          <img src={footer_back} alt="footer_back" className="w-100" />
        </span>
        <span className=" position-absolute footer_back_2 section_2_side_animation">
          <img src={footer_back} alt="footer_back" className="w-100" />
        </span>
        <div className="py-5">
          <Row>
            <Col lg={7} xs={12}>
              <div>
                <span>
                  <img className="w-25" src={logo} alt="logo" />
                </span>
                <p className=" ff_heavy mb-0 fw_900 utn_shadow fs_xl clr_black_07 lh-sm text-uppercase mt-3">
                  <span className=" d-lg-block">Utn vulputate</span> rutrum
                  bibend puru.
                </p>
                <p className=" ff_medium opacity-75">
                  <span className=" d--lg-block">
                    Faucibus pulvinar enim in sagittis. Aliquam libero dolor
                    iaculis in aliquam. Cursus nibh
                  </span>
                  enim sed et, mauris morbi. Faucibus viverra et diam sit
                  cursus.
                </p>
                <div className="input_box position-relative">
                  <input
                    type="text"
                    className="input_footer w-100 rounded-pill py-4 px-4 clr_placeholder"
                    placeholder="Enter Email Address"
                  />
                  <span className=" position-absolute end-0 top-0 mt-2 me-2">
                    <OrangeBtn text="SUBMIT" />
                  </span>
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              xs={12}
              className=" d-flex align-items-center justify-content-lg-end"
            >
              <div className=" d-flex align-items-end justify-content-center flex-lg-column">
                <span>
                  <img src={insta_1} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={be_2} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={you_3} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={fb_4} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={twe_5} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={in_6} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <hr className="footer_line" />
      <Container>
        <div className=" d-sm-flex justify-content-between">
          <p className=" ff_medium fs_sm clr_black_07 opacity_6">
            Copyright ©2022 | ABA
          </p>
          <p className=" ff_medium fs_sm clr_black_07 opacity_6">
            All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};
