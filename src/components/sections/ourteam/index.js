import React, { useState } from "react";
import { Typography, Row, Col, Image, Card, Button } from "antd";
import { Icon, CaretRightOutlined } from "@ant-design/icons";
import First from "../../../assets/images/Character1PreGen.png";
import Second from "../../../assets/images/Character2PreGen.png";
import Third from "../../../assets/images/Character3PreGen.png";
import Fourth from "../../../assets/images/Character4PreGen.png";
import Fifth from "../../../assets/images/Character5PreGen.png";
import Sixth from "../../../assets/images/Character6PreGen.png";
import Seventh from "../../../assets/images/Character7PreGen.png";
import Eigth from "../../../assets/images/Character8PreGen.png";
import Nineth from "../../../assets/images/Character9PreGen.png";

import "antd/dist/antd.css";
import "./styles.less";

const { Text, Link } = Typography;
const { Meta } = Card;

const OurTeam = () => {
  return (
    <div className="team-wrapper" id="team">
      <div className="container-fluid">
        <div className="team-content-wrapper">
          <Text className="team-title">Team Members</Text>
          <Row className="flex justify-center mt-60">
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={First} className="avatar" />
                <Text className="name">Meta Papa</Text>
                <Text className="role">Co Founder</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Second} className="avatar" />
                <Text className="name">Meta Mama</Text>
                <Text className="role">Co Founder</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Third} className="avatar" />
                <Text className="name">Zio</Text>
                <Text className="role">Creative</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Fourth} className="avatar" />
                <Text className="name">Elasm</Text>
                <Text className="role">Creative</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Fifth} className="avatar" />
                <Text className="name">Rosa</Text>
                <Text className="role">Community Manager</Text>
              </div>
            </Col>
          </Row>
          <Row className="flex justify-center mt-50">
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Sixth} className="avatar" />
                <Text className="name">Chance</Text>
                <Text className="role">Senior Manager</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Seventh} className="avatar" />
                <Text className="name">Gio</Text>
                <Text className="role">Game Developer</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Eigth} className="avatar" />
                <Text className="name">Technico</Text>
                <Text className="role">Discord Manager</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={4}>
              <div className="member-item">
                <img src={Nineth} className="avatar" />
                <Text className="name">Razor</Text>
                <Text className="role">Web3 Developer</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
