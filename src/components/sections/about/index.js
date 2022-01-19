import React from "react";
import { Typography, Row, Col, Carousel, Image, Button } from "antd";
import "./styles.less";
import "antd/dist/antd.css";

const { Text } = Typography;

const About = () => {
  return (
    <div>
      <div className="about-wrapper" id="about">
        <div className="container-fluid">
          <div className="about-content-wrapper">
            <p className="about-title">About MMYC</p>
            <p className="about-summary mt-30">
              An all-new opportunity has just entered the Metaverse, and
              everything is about to change. All the way from the Meta Mini
              Youth Club, The Meta Minis have arrived and are ready to take
              over. Only <b>9,999 Meta Minis</b> will be minted, a limited
              supply that will quickly be adopted by loving owners. Will you
              rescue a Meta Mini for yourself? Will you adopt and home one of
              these wonderfully created NFTs? Will you join the Youth Club? Each
              token is <b>uniquely created,</b> with different traits,
              characteristics and personalities! Some are naughty, some are{" "}
              <b>sneaky</b>, some <b>cute</b>, and some <b>rare</b> – but
              they’re all delightful. As a Youth Club member, you are{" "}
              <b>guaranteed</b> many long and exciting adventures ahead, and
              generate passive income. Be quick though, they’re minting soon as{" "}
              <b>ERC 721 tokens</b> on the Ethereum blockchain, and the drop
              will be live on the website. With a large % of sale proceeds going
              to paediatric intensive care <b>units worldwide</b>, your
              investment will also <b>contribute</b> to{" "}
              <b>saving children’s lives.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
