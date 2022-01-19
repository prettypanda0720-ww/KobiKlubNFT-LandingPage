import React, { useState } from "react";
import { Typography, Row, Col, Image, Card, Button } from "antd";
import { Icon, CaretRightOutlined } from "@ant-design/icons";
import Papa from "../../../assets/images/papa.png";
import Mama from "../../../assets/images/mama.png";
import Zio from "../../../assets/images/zio.png";
import Chance from "../../../assets/images/chance.png";
import Rosa from "../../../assets/images/rosa.png";
import Technico from "../../../assets/images/technico.png";
import Gio from "../../../assets/images/gio.png";

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
          <Row className="mt-60">
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Papa} className="avatar" />
                <Text className="name">Meta Papa</Text>
                <Text className="role">Co Founder</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Mama} className="avatar" />
                <Text className="name">Meta Mama</Text>
                <Text className="role">Co Founder</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Zio} className="avatar" />
                <Text className="name">Zio</Text>
                <Text className="role">Creative</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Chance} className="avatar" />
                <Text className="name">Chance</Text>
                <Text className="role">Marketing Team</Text>
              </div>
            </Col>
          </Row>
          <Row className="mt-50">
            <Col md={12} lg={3} xl={3} />
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Rosa} className="avatar" />
                <Text className="name">Meta Mama</Text>
                <Text className="role">Co Founder</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Technico} className="avatar" />
                <Text className="name">Zio</Text>
                <Text className="role">Creative</Text>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6}>
              <div className="member-item">
                <img src={Gio} className="avatar" />
                <Text className="name">Chance</Text>
                <Text className="role">Marketing Team</Text>
              </div>
            </Col>
            <Col md={12} lg={3} xl={3} />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
