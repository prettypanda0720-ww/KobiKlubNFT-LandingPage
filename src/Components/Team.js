import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Team() {
  return (
    <div className="team-wrapper pt-5 pb-5" id="team">
      <Container>
        <div className="team-content-wrapper">
          <p className="font-xl mb-0 white-color headingTxt mt-3">
            <b>Team Members</b>
          </p>
          <Row className="flex justify-content-center mt-4">
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character1PreGen.png" className="avatar" />
                <p className="name">Meta Papa</p>
                <p className="role">Co Founder</p>
              </div>
            </Col>
            {/* <Col xl={1} /> */}
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character2PreGen.png" className="avatar" />
                <p className="name">Meta Mama</p>
                <p className="role">Co Founder</p>
              </div>
            </Col>
            {/* <Col xl={1} /> */}
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character3PreGen.png" className="avatar" />
                <p className="name">Zio</p>
                <p className="role">Creative</p>
              </div>
            </Col>
            {/* <Col xl={1} /> */}
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character4PreGen.png" className="avatar" />
                <a
                  href="https://instagram.com/eslammo7amed?utm_medium"
                  target="_blank"
                  className="name"
                >
                  <span className="nb-icon d-flex justify-content-center align-items-center">
                    <FaInstagram className="mr-1" style={{width: "1.8rem", height: "1.8rem"}}/>
                    Eslam
                  </span>
                </a>
                <p className="role">Creative</p>
              </div>
            </Col>
            {/* <Col xl={1} /> */}
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character5PreGen.png" className="avatar" />
                <p className="name">Rosa</p>
                <p className="role">Community Manager</p>
              </div>
            </Col>
          </Row>
          <Row className="flex justify-content-center mt-4">
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character6PreGen.png" className="avatar" />
                <p className="name">Chance</p>
                <p className="role">Senior Manager</p>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character7PreGen.png" className="avatar" />
                <p className="name">Gio</p>
                <p className="role">Game Developer</p>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character8PreGen.png" className="avatar" />
                <p className="name">Technico</p>
                <p className="role">Discord Manager</p>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={4} lg={4} xl={2}>
              <div className="member-item">
                <Image src="image/Character9PreGen.png" className="avatar" />
                <p className="name">Razor</p>
                <p className="role">Web3 Developer</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
