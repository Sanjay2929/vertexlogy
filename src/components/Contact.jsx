import React from "react";
import { Col, Row } from "react-bootstrap-v5";
import redimg from "../assets/img/webp/sec3Img.webp";
import manImg from "../assets/img/webp/manImg.webp";
import { OrangeBtn } from "./OrangeBtn";
import headphone from '../assets/img/gif/headphone.gif'
const Contact = () => {
  return (
    <div className=" position-relative">
      <section className="bg_black_07 position-relative cornerDesign">
        <div className="maxW1920 mx-auto position-relative px-2 z-1">
          <Row className=" align-items-center">
            <Col md={6} xs={12} className="px-0 hoverimg" data-aos="fade-right">
              <div className="shinehover">
                <img className="w-100" src={redimg} alt="img" />
              </div>
            </Col>
            <Col
              md={6}
              xs={12}
              className="ps-lg-5 py-md-4 py-5  py-md-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="ps-xxl-5 ms-xxl-5 pe-2 maxW_md558">
                <h2
                  className="fw_900 fs_xl ff_heavy text-uppercase text-white mb-1 text-md-start text-center sec3Text_shadow"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  Sed volutpat erat dignissim iaculis aenean
                </h2>
                <p
                  className=" text-white ff_medium fw_400 pe-md-3 fs_sm lh_lg_170 lh_140 pb-xl-5 px-sm-4 px-md-0 pb-2 mb-2 text-md-start text-center"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                  scelerisque congue pellentesque massa porta vel donec dapibus.
                </p>
                <div className="pt-1 text-center text-md-start">
                  <OrangeBtn text="Contact Us" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="bg_offWhiteE6 position-relative cornerDesign2">
        <div className="maxW1920 mx-auto position-relative px-2 z-1">
          <Row className=" align-items-center flex-wrap-reverse">
            <Col
              md={6}
              xs={12}
              className="pe-lg-5 py-md-4 py-5  ps-0 py-md-0 d-flex justify-content-end"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="pe-xxl-5 me-xxl-5 ps-2 maxW_md558">
                <h2
                  className="fw_900 fs_xl ff_heavy text-uppercase clr_black_07 mb-1 text-md-start text-center sec3Text_shadow"
                  data-aos="fade-rifht"
                  data-aos-delay="400"
                >
                  At tempor, amet viverra eu Quisque
                </h2>
                <p
                  className="clr_black_07 ff_medium fw_400 pe-md-3 fs_sm lh_lg_170 lh_140 pb-xl-4 px-sm-4 px-md-0 pb-2 mb-0 text-md-start text-center"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  Faucibus pulvinar enim in sagittis. Aliquam libero dolor
                  iaculis in aliquam. Cursus nibh enim sed et, mauris morbi.
                  Faucibus viverra et diam sit cursus. Pellentesque posuere.
                </p>
                <div
                  className="pt-3  text-center text-md-start"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <OrangeBtn text="Talk To Me" />
                </div>
              </div>
            </Col>
            <Col
              md={6}
              xs={12}
              className="px-0 hoverimg"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="shinehover">
                <img className="w-100" src={headphone} alt="img" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="bg_black_07 position-relative cornerDesign">
        <div className="maxW1920 px-2 mx-auto position-relative z-1">
          <Row className=" align-items-center">
            <Col
              md={6}
              xs={12}
              className="px-0 hoverimg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="shinehover">
                <img className="w-100" src={manImg} alt="img" />
              </div>
            </Col>
            <Col md={6} xs={12} className="ps-lg-5 py-md-4 py-5  py-md-0">
              <div className="ps-xxl-5 ms-xxl-5 pe-2 maxW_md558">
                <h4
                  className="text-white ff_medium fw_400 fs_sm text-md-start text-center sec3Text_shadow"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  About me
                </h4>
                <h2
                  className="fw_900 fs_xl ff_heavy text-uppercase text-white mb-1 text-md-start text-center sec3Text_shadow"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  John Smith
                </h2>
                <p
                  className=" text-white ff_medium fw_400 pe-md-2 fs_sm lh_lg_170 lh_140 pb-xl-5 px-sm-4 px-md-0 pb-2 mb-2 text-md-start text-center"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  Euismod nunc mauris lacinia sapien nulla accumsan condimentum.
                  Lectus vitae tristique tellus amet quis eu faucibus leo.
                  Dictum mauris ultrices sed urna, eget cras. Nullam egestas
                  eros senectus et, erat aliquet in. Egestas interdum gravida
                  pellentesque amet, quisque. In quis vitae lectus aenean congue
                  odio sit semper porta. Pellentesque id tempus, mauris donec
                  facilisis.
                </p>
                <div
                  className="pt-1 text-center text-md-start"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <OrangeBtn text="Contact with Me" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Contact;
