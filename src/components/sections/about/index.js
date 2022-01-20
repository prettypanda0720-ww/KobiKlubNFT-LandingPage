import React from "react";
import { Typography, Row, Col, Carousel, Image, Button } from "antd";
import AboutUS from "../../../assets/images/aboutus.png";
import Wish from "../../../assets/images/about-wish.png";
import "./styles.less";
import "antd/dist/antd.css";

const { Text } = Typography;

const About = () => {
  return (
    <div>
      <div className="about-wrapper" id="about">
        <div className="container-fluid">
          <div className="about-content-wrapper">
            <Row>
              <Col xs={24} sm={12} md={12} lg={12} xl={12} className="aboutus">
                <img src={AboutUS} className="first-img"/>
                <img src={Wish} className="second-img"/>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <p className="about-title">About Us</p>
                <p className="about-summary mt-30">
                  The MMYC is not just a project, it's an exciting new youthful
                  brand birthed through NFT's. Welcoming our children into the
                  Metaverse. Welcoming OUR future into THE future.
                </p>
                <p className="about-summary mt-30">
                  Everything is about to change. All the way from the Meta Mini
                  Youth Club the Meta Minis have arrived and are ready to take
                  over. Only 9,999 MMYC's will be minted as ERC-721 tokens on
                  the ether blockchain, and quickly adopted by owners LIVE on
                  our website.
                </p>
                <p className="about-summary mt-30">
                  As a youth club member you are guaranteed many long and
                  exciting adentures ahead. Not only will you be generating
                  passive income and making critically ill children's wished
                  come true. You will be helping to shape the ethos of Web3.0
                  into an opportunistic place for the next generation.
                  Encouraging those to foster an open conversation about the
                  benefits of the online world and our future within the
                  metaverse.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
