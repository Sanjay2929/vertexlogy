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
    <div className=" position-relative pt-lg-5">
      <span className=" position-absolute end-0 me-5 bottom-0 section_2_side_animation mb-5 pb-4">
        <img src={bottom_design} alt="bottom_design" className="w-100" />
      </span>
      <span className=" position-absolute section_2_side_animation start-0 ms-5 d-none d-sm-block v top-0 mt-5">
        <img src={bottom_design} alt="bottom_design" className="w-100" />
      </span>
      <Container className=" position-relative pt-sm-5 padding_footer_cus">
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
                  <img className="w-25 pointer" src={logo} alt="logo" />
                </span>
                <p
                  className=" ff_heavy mb-0 fw_900 utn_shadow fs_xl clr_black_07 lh-sm text-uppercase mt-3"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <span
                    className=" d-lg-block"
                    data-aos="fade-right"
                    data-aos-delay="900"
                  >
                    Utn vulputate
                  </span>
                  rutrum bibend puru.
                </p>
                <p
                  className=" ff_medium opacity-75 clr_black_07 fs_sm pb-4"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <span className=" d--lg-block">
                    Faucibus pulvinar enim in sagittis. Aliquam libero dolor
                    iaculis in aliquam. Cursus nibh
                  </span>
                  enim sed et, mauris morbi. Faucibus viverra et diam sit
                  cursus.
                </p>
                <div className="input_box position-relative">
                  <span className=" position-absolute top-50 translate-middle-y ms-4">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.67895 0.574219C2.05029 0.574219 1.44738 0.823952 1.00286 1.26848C0.558327 1.71301 0.308594 2.31592 0.308594 2.94458V3.1828L7.41966 7.01211L14.5307 3.18398V2.94458C14.5307 2.31592 14.281 1.71301 13.8365 1.26848C13.3919 0.823952 12.789 0.574219 12.1604 0.574219H2.67895ZM14.5307 4.52916L7.70055 8.20677C7.61422 8.25324 7.51771 8.27757 7.41966 8.27757C7.32162 8.27757 7.22511 8.25324 7.13878 8.20677L0.308594 4.52916V10.0556C0.308594 10.6843 0.558327 11.2872 1.00286 11.7317C1.44738 12.1763 2.05029 12.426 2.67895 12.426H12.1604C12.789 12.426 13.3919 12.1763 13.8365 11.7317C14.281 11.2872 14.5307 10.6843 14.5307 10.0556V4.52916Z"
                        fill="#B2B2B2"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="input_footer w-100 rounded-pill py-4 ps-5 pe-4 clr_placeholder"
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
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-delay="300"
                >
                  <img
                    src={insta_1}
                    alt="insta_1"
                    className="w-100 pointer icon_hover"
                  />
                </span>
                <span className="mt-lg-3 mt-4 ms-lg-0 ms-3">
                  <img src={be_2} alt="insta_1" className="w-100 pointer icon_hover" />
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-delay="900"
                  className="mt-lg-3 mt-4 ms-lg-0 ms-3"
                >
                  <img
                    src={you_3}
                    alt="insta_1"
                    className="w-100 pointer icon_hover"
                  />
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-delay="1200"
                  className="mt-lg-3 mt-4 ms-lg-0 ms-3"
                >
                  <img
                    src={fb_4}
                    alt="insta_1"
                    className="w-100 pointer icon_hover"
                  />
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-delay="1600"
                  className="mt-lg-3 mt-4 ms-lg-0 ms-3"
                >
                  <img
                    src={twe_5}
                    alt="insta_1"
                    className="w-100 pointer icon_hover"
                  />
                </span>
                <span
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-center"
                  data-aos-delay="2100"
                  className="mt-lg-3 mt-4 ms-lg-0 ms-3"
                >
                  <img
                    src={in_6}
                    alt="insta_1"
                    className="w-100 pointer icon_hover"
                  />
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
