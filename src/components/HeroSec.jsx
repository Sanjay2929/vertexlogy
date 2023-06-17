import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap-v5";

const HeroSec = () => {
  return (
    <>
      <section className="d-flex flex-column min_vh_lg_100 heroBG">
        <NavigationBar />
        <Container className="d-flex flex-column flex-grow-1 justify-content-center align-items-center py-5 my-sm-5">
          <h1 className="fw_900 clr_white ff_heavy fs_2xl text-uppercase heroTextShadow lh_128 mb-0 text-center pt-5">
            3D Product
          </h1>
          <h2 className="fw_900 clr_white ff_heavy fs_2xl text-uppercase heroTextShadow lh_120 pb-5   mb-0">
            Animation
          </h2>
        </Container>
      </section>
    </>
  );
};

export default HeroSec;
