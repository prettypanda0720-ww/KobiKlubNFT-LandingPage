import React from "react";
import { Typography, Row, Col, Image, Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.less";
import "antd/dist/antd.css";
import { firstGroup, secondGroup, thirdGroup } from "./data";

const { Text } = Typography;

const responsive = {
  superdesktop6: {
    breakpoint: { max: 4000, min: 3600 },
    items: 20,
  },
  superdesktop5: {
    breakpoint: { max: 3600, min: 3200 },
    items: 18,
  },
  superdesktop4: {
    breakpoint: { max: 3200, min: 2800 },
    items: 16,
  },
  superdesktop3: {
    breakpoint: { max: 2800, min: 2400 },
    items: 14,
  },
  superdesktop2: {
    breakpoint: { max: 2400, min: 2000 },
    items: 12,
  },
  superdesktop1: {
    breakpoint: { max: 2000, min: 1600 },
    items: 10,
  },
  tablet4: {
    breakpoint: { max: 1600, min: 1440 },
    items: 8,
  },
  tablet3: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1440, min: 1200 },
    items: 7,
  },
  tablet2: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1200, min: 992 },
    items: 6,
  },
  tablet1: {
    // the naming can be any, depends on you.
    breakpoint: { max: 992, min: 768 },
    items: 5,
  },
  mobile3: {
    breakpoint: { max: 768, min: 576 },
    items: 4,
  },

  mobile2: {
    breakpoint: { max: 576, min: 480 },
    items: 2,
  },

  mobile1: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
  },
};

const Discord = () => {
  return (
    <div className="discord-wrapper" id="socials">
      <div className="discord-content-wrapper">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[
                "superLargeDesktop6",
                "superLargeDesktop5",
                "superLargeDesktop4",
                "superLargeDesktop3",
                "superLargeDesktop2",
                "superLargeDesktop1",
                "tablet4",
                "tablet3",
                "tablet2",
                "tablet1",
                "mobile3",
                "mobile2",
                "mobile1",
              ]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {firstGroup.map((item, index) => {
                return <img src={item.origin} className="character-img" />;
              })}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            style={{ position: "relative" }}
          >
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="all .5"
              autoPlaySpeed={5000}
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[
                "mobile1",
                "mobile2",
                "mobile3",
                "tablet1",
                "tablet2",
                "tablet3",
                "tablet4",
                "superLargeDesktop1",
                "superLargeDesktop2",
                "superLargeDesktop3",
                "superLargeDesktop4",
                "superLargeDesktop5",
                "superLargeDesktop6",
              ]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {secondGroup.map((item, index) => {
                return <img src={item.origin} className="character-img" />;
              })}
            </Carousel>
            <div className="join-discord">
              <a href="https://discord.gg/6bNCRkrA" target="_blank" className="discord-btn">Join our Discord</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={[
                "mobile1",
                "mobile2",
                "mobile3",
                "tablet1",
                "tablet2",
                "tablet3",
                "tablet4",
                "superLargeDesktop1",
                "superLargeDesktop2",
                "superLargeDesktop3",
                "superLargeDesktop4",
                "superLargeDesktop5",
                "superLargeDesktop6",
              ]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {thirdGroup.map((item, index) => {
                return <img src={item.origin} className="character-img" />;
              })}
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Discord;

