import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap-v5";

const HeroSec = () => {
  return (
    <>
      <section className="d-flex flex-column min_vh_lg_100 heroBG position-relative">
        <NavigationBar />
        <Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center py-5 my-sm-5">
          <h1 className="fw_900 clr_white ff_heavy fs_2xl text-uppercase heroTextShadow lh_128 mb-0 text-center pt-5">
            3D Product
          </h1>
          <h2 className="fw_900 clr_white ff_heavy fs_2xl text-uppercase heroTextShadow lh_120 pb-5   mb-0">
            Animation
          </h2>
        </Container>
        <div className="d-flex justify-content-center socialLinks position-fixed start_N70 start_N120 start_N125 top-50 gap-5 z_51">
          <a
            className="ff_light fw_400 fs_md clr_black_07 LinksSocial position-relative"
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            Behance
          </a>
          <a
            className="ff_light fw_400 fs_md clr_black_07 LinksSocial position-relative"
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            Youtube
          </a>
          <a
            className="ff_light fw_400 fs_md clr_black_07 "
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <div className="d-flex justify-content-center socialLinks position-fixed end_N70 end_N140 end_N155 top-50 gap-5 z_51">
          <a
            className="ff_light fw_400 fs_md clr_black_07 LinksSocial position-relative"
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            Twitter
          </a>
          <a
            className="ff_light fw_400 fs_md clr_black_07 LinksSocial position-relative"
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            Facebook
          </a>
          <a
            className="ff_light fw_400 fs_md clr_black_07 "
            style={{ letterSpacing: "13%" }}
            href="#"
          >
            Instagram
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSec;
