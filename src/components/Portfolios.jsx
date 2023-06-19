import React from "react";
import { Col, Container } from "react-bootstrap-v5";
import Slider from "react-slick";
import slider_1 from "../assets/img/webp/slider_1.webp";
import slider_2 from "../assets/img/webp/slider_2.webp";
import slider_3 from "../assets/img/webp/slider_3.webp";
import slider_4 from "../assets/img/webp/slider_4.webp";
export const Portfolios = () => {
  var our_slider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 60,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      { 
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: 60,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          //   centerPadding: 60,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const buttons = React.useRef();
  return (
    <div className="py-xl-5 pb-5">
      <Container>
        <div className=" d-flex align-items-center justify-content-between py-xl-5 pb-5">
          <p className=" ff_heavy fw_900 fs_xl text-uppercase mb-0">
            Our Portfolios
          </p>
          <div className=" d-flex align-items-center">
            <span>
              <svg
                width="54"
                onClick={() => buttons.current.slickPrev()}
                className="pointer"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26.5217"
                  cy="26.5217"
                  r="25.9913"
                  stroke="url(#paint0_linear_1_41)"
                  stroke-width="1.06087"
                />
                <path
                  d="M31.6142 32.887L25.249 26.5218L31.6142 20.1566L30.3412 17.6105L21.4298 26.5218L30.3412 35.4331L31.6142 32.887Z"
                  fill="white"
                />
                <path
                  d="M31.6142 32.887L25.249 26.5218L31.6142 20.1566L30.3412 17.6105L21.4298 26.5218L30.3412 35.4331L31.6142 32.887Z"
                  fill="url(#paint1_linear_1_41)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_41"
                    x1="-6.58925"
                    y1="6.38486"
                    x2="42.7664"
                    y2="53.5892"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2801" />
                    <stop offset="1" stop-color="#FF6500" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_41"
                    x1="30.3883"
                    y1="37.6471"
                    x2="16.4076"
                    y2="29.294"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2801" />
                    <stop offset="1" stop-color="#FF6500" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="ms-3">
              <svg
                width="54"
                onClick={() => buttons.current.slickNext()}
                className="pointer"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27.4783" cy="26.5217" r="26.5217" fill="#D9D9D9" />
                <circle
                  cx="27.4783"
                  cy="26.5217"
                  r="26.5217"
                  fill="url(#paint0_linear_1_46)"
                />
                <path
                  d="M22.3852 32.887L28.7504 26.5218L22.3852 20.1566L23.6582 17.6105L32.5695 26.5218L23.6582 35.4331L22.3852 32.887Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_46"
                    x1="-5.63271"
                    y1="6.38486"
                    x2="43.723"
                    y2="53.5892"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2801" />
                    <stop offset="1" stop-color="#FF6500" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
        <Slider {...our_slider} ref={buttons} className="portfolios">
          <div className="px-3">
            <span>
              <img src={slider_1} alt="slider_1" className="w-100" />
            </span>
          </div>
          <div className="px-3">
            <span>
              <img src={slider_2} alt="slider_1" className="w-100" />
            </span>
          </div>
          <div className="px-3">
            <span>
              <img src={slider_3} alt="slider_1" className="w-100" />
            </span>
          </div>
          <div className="px-3">
            <span>
              <img src={slider_4} alt="slider_1" className="w-100" />
            </span>
          </div>
        </Slider>
      </Container>
    </div>
  );
};
