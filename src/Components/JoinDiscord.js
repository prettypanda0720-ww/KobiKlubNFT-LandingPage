import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaYoutube, FaDiscord } from "react-icons/fa";
import DSImage from "./discordslider";

export default function JoinDiscord() {
  return (
      <div id="socials">
        <div className="joinDiscord" style={{position: "relative"}}>
          <DSImage src={"discord-background.png"}>
            <div className="join-discord">
              <div><b>Sign up to our newsletter for exclusive announcements and MMYC news.</b></div>
              <div className="subscribe-wrapper">
                <input type="email" className="input-email" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </DSImage>
        </div>
        <div className="footerLogo">
          <Container>
            <Row>
              <Col md={12} className="text-center">
                <img src="image/footer-logo.png"></img>
              </Col>
  
              <Col md={12} className="text-center mt-4 mb-3">
                <ul className="socialIcons d-flex text-center mb-0">
                  <li>
                    {" "}
                    <a href="https://twitter.com/MMYC_NFT" target="_blank">
                      {" "}
                      <span className="nb-icon">
                        <FaTwitter />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/metaminiyouthclub" target="_blank">
                      <span className="nb-icon">
                        <FaDiscord />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/kobikidz/" target="_blank">
                      <span className="nb-icon">
                        <FaInstagram />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/channel/UC0LLNuPK6h8c-hXvZCNP2JQ" target="_blank">
                      {" "}
                      <span className="nb-icon">
                        <FaYoutube />
                      </span>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={12} className="text-center">
                <p className="text-center copyright text-white font-lgr">
                  © MMYC - EST. 2022
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
}


