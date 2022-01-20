import React, { useState } from "react";
import { Row, Col, Image } from "antd";
import Raries from "../../../assets/images/raries.png";
import "./styles.less";

const Rare = () => {
  return (
    <div className="rare-wrapper" id="traits">
      <div className="container-fluid">
        <p className="rare-title">How Rare Is my Meta Mini?</p>
        <p className="rare-summary">
          Meta minis are created by random algorithms that ensures each
          character is unique and differentiated from others. Some Meta minis
          possess very rare traits that create their own rareness from the rest
          of bunch.
        </p>
        <Row className="rare-content-wrapper mt-40">
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="rarelist-wrapper">
            <div className="rare-list">
              <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                  <p className="rare-value">9,999</p>
                  <p className="rare-value mt-20">10</p>
                  <p className="rare-value mt-10">10</p>
                  <p className="rare-value mt-20">20</p>
                  <p className="rare-value mt-5">7</p>
                  <p className="rare-value mt-5">39</p>
                  <p className="rare-value mt-5">25</p>
                  <p className="rare-value mt-5">15</p>
                  <p className="rare-value mt-5">56</p>
                  <p className="rare-value mt-5">2</p>
                  <p className="rare-value mt-5">8</p>
                  <p className="rare-value mt-5">3</p>
                  <p className="rare-value mt-5">21</p>
                  <p className="rare-value mt-5">8</p>
                  <p className="rare-value mt-5">11</p>
                  <p className="rare-value mt-20">215</p>
                </Col>
                <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                  <p className="rare-label ">Meta Minis</p>
                  <p className="rare-label mt-20">Super Rare</p>
                  <p className="rare-label mt-10">Legendary</p>
                  <p className="rare-label mt-20">Backgrounds</p>
                  <p className="rare-label mt-5">Base Characters</p>
                  <p className="rare-label mt-5">Hair/Hats</p>
                  <p className="rare-label mt-5">Eyes</p>
                  <p className="rare-label mt-5">Mouths</p>
                  <p className="rare-label mt-5">Outfits</p>
                  <p className="rare-label mt-5">Head Accessories</p>
                  <p className="rare-label mt-5">Face Accessories</p>
                  <p className="rare-label mt-5">Ear Accessories</p>
                  <p className="rare-label mt-5">Hand Accessories</p>
                  <p className="rare-label mt-5">Back Accessories</p>
                  <p className="rare-label mt-5">Body Accessories</p>
                  <p className="rare-label mt-20">Total</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} className="character-wrapper">
            <img src={Raries} className="rotate" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Rare;
