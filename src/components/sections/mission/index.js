import React, { useState } from "react";
import { Typography, Row, Col, Image } from "antd";
import wish from "../../../assets/images/wish.png";
import princess from "../../../assets/images/princess.png";
import "antd/dist/antd.css";
import "./styles.less";

const { Text } = Typography;

const Mission = () => {
  return (
    <div className="mission-wrapper" id="mission">
      <div className="container-fluid" style={{position: "relative"}}>
        <div className="mission-content-wrapper">
          <p className="mission-title">Our Mission</p>
          <p className="mission-paragraph mt-40">
            Welcome to the Meta Mini Youth Club, we are proud to introduce our
            Roadmap.
          </p>
          <p className="mission-paragraph mt-30">
            The MMYC is not just a project, it’s an exciting new brand birthed
            through NFT with 2 main objectives. Building the most amazing
            community of Diamond hands and help generate passive income for all
            holders whilst saving children’s lives and fulfilling their
            Make-A-Wish dreams come true.
          </p>
          <p className="mission-paragraph mt-30">
            15% of our overall revenue will be deposited into our Community
            wallet for our Meta Mini Youth Club Land (Land purchase will be
            voted on by the community), giveaways, floor sweeps and marketing.
            Giving back to our community and rewarding holders is a priority.
          </p>
          <p className="mission-paragraph mt-30">
            15% of our overall revenue will be donated to our children’s
            Paediatric Intensive Care Unit (PICU) Charity and our 3 Make-A-Wish
            Children, both voted by our community in our #charitysuggestions &
            #Make-A-Wish channels within our discord.
          </p>
          <div className="wish-img-wrapper">
            <img src={wish} />
          </div>
        </div>
        <img src={princess} className="princess-image" />
      </div>
    </div>
  );
};

export default Mission;
