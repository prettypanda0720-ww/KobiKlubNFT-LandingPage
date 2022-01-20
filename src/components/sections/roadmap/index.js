import React, { useState } from "react";
import { Typography, Row, Col, Image, Timeline } from "antd";
import "antd/dist/antd.css";
import "./styles.less";
import TimelineItem from "antd/lib/timeline/TimelineItem";

const { Text } = Typography;

const RoadMap = () => {
  return (
    <div className="roadmap-wrapper" id="roadmap">
      <div className="container-fluid">
        <div className="mobileHidden roadmap-content-wrapper">
          <Row>
            <Text className="roadmap-title">Road Map</Text>
          </Row>
          <Timeline mode="alternate">
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">5% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        POAP Airdrop to holders of the first 500 Mints (This
                        will be your badge to signify that you are a part of the
                        first charity donation.)
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        15% of the revenue generated from the first 500 Mints,
                        will be donated to the first charity.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        List collection on Rarity Tools, Rarity Sniper, Rarity
                        Sniffer.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">10% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        Open community wallet and deposit 15% of the revenue
                        generated from the first 1000 mints.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Open community investment channel to vote on our MMYC
                        Land purchase.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">20% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        5 ETH GIVEAWAY (1 Winner). 5 ETH will be dropped into 1
                        Lucky random holders wallet. Entrants will be for the
                        holders of the first 2000 mints only.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">40% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        3D COLLECTIBLE FIGUREEN GIVEAWAY (10 Winners). 10 Lucky
                        holders will be selected at random to receive a MMYC
                        Gift pack with a 3D Collectible Figure of their NFT.
                        Winners will be announced & creation will start after
                        the MMYC NFT Collection reveal.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">60% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        15% revenue made so far deposited into charity wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Create our first video for our new MMYC YouTube channel
                        - The video will document the MMYC the recipients of our
                        first charity donation.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">80% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        15 ETH GIVEAWAY (3 Winners x 5ETH). 3 Random Lucky
                        Holders will receive 5ETH dropped into their wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        50 Holders will be drawn randomly to receive
                        limited-edition MMYC Merchandise.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">100% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        Deposit 15% of the overall revenue to the charity
                        wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Make the final donations to the chosen charities & make
                        3 children in needs wishes come true (voted on by our
                        discord community).
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Complete the 15% overall revenue deposit to our
                        community wallet. This will be used for MMYC Land
                        Purchase, marketing, Giveaways, floor sweeps and to
                        reward holders.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC Land purchase voted on by our discord community.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC 3D Collectible Figureen Store opening - All holders
                        can purchase a 3D Collectible Figure of their own NFT.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC limited-edition Merchandise Store opening for
                        holders only.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Huge charity campaign: Visiting the charities that
                        received donations, create care packages for the
                        children and document the huge impact our amazing
                        community made to children’s lives (document will be
                        posted on the youtube channel).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <TimelineItem> </TimelineItem>
          </Timeline>
        </div>
        <div className="mobileVisible roadmap-content-wrapper">
          <Row>
            <Text className="roadmap-title">Road Map</Text>
          </Row>
          <Timeline>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">5% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        POAP Airdrop to holders of the first 500 Mints (This
                        will be your badge to signify that you are a part of the
                        first charity donation.)
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        15% of the revenue generated from the first 500 Mints,
                        will be donated to the first charity.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        List collection on Rarity Tools, Rarity Sniper, Rarity
                        Sniffer.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">10% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        Open community wallet and deposit 15% of the revenue
                        generated from the first 1000 mints.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Open community investment channel to vote on our MMYC
                        Land purchase.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">20% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        5 ETH GIVEAWAY (1 Winner). 5 ETH will be dropped into 1
                        Lucky random holders wallet. Entrants will be for the
                        holders of the first 2000 mints only.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">40% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        3D COLLECTIBLE FIGUREEN GIVEAWAY (10 Winners). 10 Lucky
                        holders will be selected at random to receive a MMYC
                        Gift pack with a 3D Collectible Figure of their NFT.
                        Winners will be announced & creation will start after
                        the MMYC NFT Collection reveal.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">60% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        15% revenue made so far deposited into charity wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Create our first video for our new MMYC YouTube channel
                        - The video will document the MMYC the recipients of our
                        first charity donation.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">80% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        15 ETH GIVEAWAY (3 Winners x 5ETH). 3 Random Lucky
                        Holders will receive 5ETH dropped into their wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        50 Holders will be drawn randomly to receive
                        limited-edition MMYC Merchandise.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="roadmap-item">
                <div className="content mr-30">
                  <p className="title">100% SOLD</p>
                  <ul className="summary">
                    <li>
                      <p className="label">
                        Deposit 15% of the overall revenue to the charity
                        wallet.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Make the final donations to the chosen charities & make
                        3 children in needs wishes come true (voted on by our
                        discord community).
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Complete the 15% overall revenue deposit to our
                        community wallet. This will be used for MMYC Land
                        Purchase, marketing, Giveaways, floor sweeps and to
                        reward holders.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC Land purchase voted on by our discord community.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC 3D Collectible Figureen Store opening - All holders
                        can purchase a 3D Collectible Figure of their own NFT.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        MMYC limited-edition Merchandise Store opening for
                        holders only.
                      </p>
                    </li>
                    <li>
                      <p className="label">
                        Huge charity campaign: Visiting the charities that
                        received donations, create care packages for the
                        children and document the huge impact our amazing
                        community made to children’s lives (document will be
                        posted on the youtube channel).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Timeline.Item>
            <TimelineItem> </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
