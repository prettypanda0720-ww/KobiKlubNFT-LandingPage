
import React, { useState } from "react";
// import { Image } from "antd";
import bannerTitle from "../../../assets/images/banner-1.png";
import bannerSummary from "../../../assets/images/banner-2.png";
import "./styles.less";

const RoarWards = () => {
  return (
    <div className="banner-wrapper" id="roadwards">
      <div className="container-fluid">
        <div className="banner-content-wrapper">
          <img src={bannerTitle}  />
          <img
            src={bannerSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default RoarWards;
