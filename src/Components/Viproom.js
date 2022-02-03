import React from "react";
import { Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Viproom() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const vips = [
    {
      image: "image/1.png",
      name: "",
    },
    {
      image: "image/2.png",
      name: "",
    },
    {
      image: "image/3.png",
      name: "",
    },
    {
      image: "image/4.png",
      name: "",
    },
    {
      image: "image/5.png",
      name: "",
    },
    {
      image: "image/6.png",
      name: "",
    },
    {
      image: "image/7.png",
      name: "",
    },
    {
      image: "image/8.png",
      name: "",
    }
  ];

  return (
    <div className="vip-room pt-5 pb-5">
      <div className="text-white mt-4 mb-4">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite
          autoPlay={true}
          autoPlaySpeed={2500}
          transitionDuration={1000}
        >
          {vips.map((vip, index) => (
            <div key={"vip" + index} className="pt-0 pb-0">
              <Image
                key={"vip" + index}
                src={vip.image}
                draggable="false"
                className="w-100 cursor-pointer"
                style={{borderRadius: "15px"}}
              />
              {/* <span>{vip.name}</span> */}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
