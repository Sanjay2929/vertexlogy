import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap-v5";

const HeroSec = () => {
  return (
    <>
      <section className="d-flex flex-column min-vh-100 bg-black">
        <NavigationBar />
        <Container className="d-flex justify-content-center align-items-center">

        </Container>
      </section>
    </>
  );
};

export default HeroSec;
