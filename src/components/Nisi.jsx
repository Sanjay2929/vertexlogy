import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import side_img from "../assets/img/svg/section_2_side_img.svg";
export const Nisi = () => {
  return (
    <div className="nisi_bg py-5 position-relative">
      <span className=" position-absolute end-0 top-0 me-5 section_2_side_animation">
        <img src={side_img} alt="side_img" className="w-100" />
      </span>
      <div className="pt-xxl-5">
        <Container className="py-lg-5">
          <Row className="py-5">
            <Col lg={8} xs={12}>
              <p className="mb-0 ff_roy_bold text-uppercase fw_900 fs_lg clr_black_07 nisi_text">
                <span className=" d-xl-block">Nisi et diam euismod </span>suspendisse
                tristique quis
              </p>
            </Col>
            <Col lg={4} xs={12} className=" pt-lg-0 pt-4">
              <p className=" fw_400 clr_black_07 ff_medium opacity-75 fs_sm">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque.
              </p>
              <button className="us_btn rounded-pill clr_white fw_700 ff_medium fs_sm">
                Contact Us
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
