import React from 'react'
import { Col, Row } from 'react-bootstrap-v5'
import redimg from "../assets/img/webp/sec3Img.webp";
const Contact = () => {
  return (
    <div>
      <section className="bg_black1E">
        <div className='maxW1920 mx-auto'>
          <Row>
            <Col>
              <img className="w-100" src={redimg} alt="img" />
            </Col>
            <Col>
              <h2 className="fw_900 fs_xl ff_heavy">
                Sed volutpat erat dignissim iaculis aenean
              </h2>
              <p>
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque massa porta vel donec dapibus.{" "}
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Contact