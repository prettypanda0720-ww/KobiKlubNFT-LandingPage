import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Rare = () => {
  return (
    <div className="rare-wrapper" id="traits">
      <Container>
        <p className="font-xxl white-color headingTxt mt-0 mb-5 text-center">
          <b>Meta Mini Traits</b>
        </p>
        <Row className="rare-content-wrapper">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="rarelist-wrapper"
          >
            <div className="rare-list">
              <Row>
                <Col xs={10} sm={10} md={8} lg={8} xl={8}>
                  <p className="rare-label">Neck Accessories</p>
                  <p className="rare-label">Hand Accessories</p>
                  <p className="rare-label">Backgrounds</p>
                  <p className="rare-label">Eyes</p>
                  <p className="rare-label">Mouths</p>
                  <p className="rare-label">Base Characters</p>
                  <p className="rare-label">Hair / Hats</p>
                  <p className="rare-label">Clothes</p>
                  <p className="rare-label">Ear Accessories</p>
                  <p className="rare-label">Total</p>
                  <p className="rare-label mt-2">Total Legendaries</p>
                </Col>
                <Col xs={2} sm={2} md={4} lg={4} xl={4}>
                  <p className="rare-value">2</p>
                  <p className="rare-value">21</p>
                  <p className="rare-value">16</p>
                  <p className="rare-value">15</p>
                  <p className="rare-value">13</p>
                  <p className="rare-value">7</p>
                  <p className="rare-value">27</p>
                  <p className="rare-value">49</p>
                  <p className="rare-value">3</p>
                  <p className="rare-value">153</p>
                  <p className="rare-value mt-2">30</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="character-wrapper"
            style={{ backgroundImage: `url(image/original-character.png)` }}
          >
            <Image src="image/raries.png" className="rotate" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rare;
