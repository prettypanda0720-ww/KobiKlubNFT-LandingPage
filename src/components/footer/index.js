import React from "react";
import "./styles.less";
import { Row, Col, Typography, BackTop, Button, Image } from "antd";
import { DiscordMainIcon, TwitterMainIcon } from "../utils";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import footerLogo from "../../assets/images/footer-logo.png";
import twitter from "../../assets/images/twitter.png";
import discord from "../../assets/images/discord.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import footerMMYC from "../../assets/images/footer-mmyc.png";
// import goTop from "../../assets/goTop.jpg";

const { Text, Link } = Typography;

function AppFooter() {
  return (
    <div className="footer-wrapper">
      <div className="footer-content-wrapper">
        <img src={footerLogo} />
        <div className="external-wrapper">
          <img src={twitter} />
          <img src={discord} />
          <img src={instagram} />
          <img src={youtube} />
        </div>
        <img src={footerMMYC} />
      </div>
      {/* <BackTop duration={5000}>
        <div className="goTop">
          <ArrowUpOutlined style={{ color: "white" }} />
          <Text className="goTop-btn">Scroll</Text>
        </div>
      </BackTop> */}
    </div>
  );
}

export default AppFooter;
