import React, { useState } from "react";
import { Typography, Row, Col, Image } from "antd";
import Tick from "../../../assets/images/tick.png";
import firstPercentItem from "../../../assets/images/1st.png";
import secondPercentItem from "../../../assets/images/2th.png";
import thirdPercentItem from "../../../assets/images/3th.png";
import fourthPercentItem from "../../../assets/images/4th.png";
import fifthPercentItem from "../../../assets/images/5th.png";
import sixthPercentItem from "../../../assets/images/6th.png";
import seventhPercentItem from "../../../assets/images/7th.png";
import roadmapBackground from "../../../assets/images/roadmap-background.png";
import "antd/dist/antd.css";
import "./styles.less";

const { Text } = Typography;

const RoadMap = () => {
  return (
    <div className="roadmap-wrapper" id="roadmap">
      <div className="container-fluid">
        <div className="mobileHidden roadmap-content-wrapper">
          <Row>
            <Text className="roadmap-title">Road Map</Text>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    POAP Airdrop to holders of the first 500 Mints (This will be
                    your badge to signify that you are a part of the first
                    charity donation.)
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15% of the revenue generated from the first 500 Mints, will
                    be donated to the first charity.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    List collection on Rarity Tools, Rarity Sniper, Rarity
                    Sniffer.
                  </p>
                </div>
                <div className="value">
                  <img src={firstPercentItem} />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={secondPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Open community wallet and deposit 15% of the revenue
                    generated from the first 1000 mints.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Open community investment channel to vote on our MMYC Land
                    purchase.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="label">
                    <img src={Tick} className="mr-5" />5 ETH GIVEAWAY (1
                    Winner). 5 ETH will be dropped into 1 Lucky random holders
                    wallet. Entrants will be for the holders of the first 2000
                    mints only.
                  </p>
                </div>
                <div className="value">
                  <img src={thirdPercentItem} />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={fourthPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    3D COLLECTIBLE FIGUREEN GIVEAWAY (10 Winners). 10 Lucky
                    holders will be selected at random to receive a MMYC Gift
                    pack with a 3D Collectible Figure of their NFT. Winners will
                    be announced & creation will start after the MMYC NFT
                    Collection reveal.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15% revenue made so far deposited into charity wallet.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Create our first video for our new MMYC YouTube channel -
                    The video will document the MMYC the recipients of our first
                    charity donation.
                  </p>
                </div>
                <div className="value">
                  <img src={fifthPercentItem} />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
          </Row>
          <Row>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} />
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={sixthPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15 ETH GIVEAWAY (3 Winners x 5ETH). 3 Random Lucky Holders
                    will receive 5ETH dropped into their wallet.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    50 Holders will be drawn randomly to receive limited-edition
                    MMYC Merchandise.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mobileVisible roadmap-content-wrapper">
          <Row>
            <Text className="roadmap-title">Road Map</Text>
          </Row>
          <Row>
            <Col>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={firstPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    POAP Airdrop to holders of the first 500 Mints (This will be
                    your badge to signify that you are a part of the first
                    charity donation.)
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15% of the revenue generated from the first 500 Mints, will
                    be donated to the first charity.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    List collection on Rarity Tools, Rarity Sniper, Rarity
                    Sniffer.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-40">
            <Col>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={secondPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Open community wallet and deposit 15% of the revenue
                    generated from the first 1000 mints.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Open community investment channel to vote on our MMYC Land
                    purchase.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-40">
            <Col>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={thirdPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />5 ETH GIVEAWAY (1
                    Winner). 5 ETH will be dropped into 1 Lucky random holders
                    wallet. Entrants will be for the holders of the first 2000
                    mints only.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-40">
            <Col>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={fourthPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    3D COLLECTIBLE FIGUREEN GIVEAWAY (10 Winners). 10 Lucky
                    holders will be selected at random to receive a MMYC Gift
                    pack with a 3D Collectible Figure of their NFT. Winners will
                    be announced & creation will start after the MMYC NFT
                    Collection reveal.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-40">
            <Col>
              <div className="roadmap-item">
                <div className="value mr-20">
                  <img src={fifthPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15% revenue made so far deposited into charity wallet.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    Create our first video for our new MMYC YouTube channel -
                    The video will document the MMYC the recipients of our first
                    charity donation.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-40">
            <Col>
              <div className="roadmap-item">
                <div className="value mr-30">
                  <img src={sixthPercentItem} />
                </div>
                <div className="content">
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    15 ETH GIVEAWAY (3 Winners x 5ETH). 3 Random Lucky Holders
                    will receive 5ETH dropped into their wallet.
                  </p>
                  <p className="label">
                    <img src={Tick} className="mr-5" />
                    50 Holders will be drawn randomly to receive limited-edition
                    MMYC Merchandise.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img src={seventhPercentItem} />
        </Row>
        <Row>
          <div className="roadmap-item mt-30 mb-80">
            <div className="content">
              <p className="label">
                <img src={Tick} className="mr-5" />
                Deposit 15% of the overall revenue to the charity wallet.
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                Make the final donations to the chosen charities & make 3
                children in needs wishes come true (voted on by our discord
                community).
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                Complete the 15% overall revenue deposit to our community
                wallet. This will be used for MMYC Land Purchase, marketing,
                Giveaways, floor sweeps and to reward holders.
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                MMYC Land purchase voted on by our discord community.
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                MMYC 3D Collectible Figureen Store opening - All holders can
                purchase a 3D Collectible Figure of their own NFT.
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                MMYC limited-edition Merchandise Store opening for holders only.
              </p>
              <p className="label">
                <img src={Tick} className="mr-5" />
                Huge charity campaign: Visiting the charities that received
                donations, create care packages for the children and document
                the huge impact our amazing community made to children’s lives
                (document will be posted on the youtube channel).
              </p>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default RoadMap;
