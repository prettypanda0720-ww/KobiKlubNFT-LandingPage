import React from "react";
import { Typography, Row, Col, Image, Button } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.less";
import "antd/dist/antd.css";
import { firstGroup, secondGroup, thirdGroup } from "./data";

const { Text } = Typography;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },

  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 8,
  },

  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
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
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {firstGroup.map((item, index) => {
                return <img src={item.origin} />;
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
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {secondGroup.map((item, index) => {
                return <img src={item.origin} />;
              })}
            </Carousel>
            <div className="join-discord">
              <div className="discord-btn">Join our Discord</div>
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
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {thirdGroup.map((item, index) => {
                return <img src={item.origin} />;
              })}
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Discord;
