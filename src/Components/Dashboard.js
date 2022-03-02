import React from "react";
import BGImage from "./slider";

export default function Dashboard() {
  const class_name = "launch-board";
  return (
    <div className="dashboard">
      <BGImage src={"final-website-cover.png"}>
        <div className="hero-content">
          <img src="hero-logo.png" className="hero-logo"/>
          <div style={{marginTop: "10px"}}><b>Welcoming our children into the Metaverse.</b></div>
          <div><b>Welcoming OUR future into the future.</b></div>
          <div className="hero-btn-wrapper">
            <a href="https://discord.gg/metaminiyouthclub" target="_blank" className="discord-btn" variant="outline-secondary">Join Our Discord</a>
            <a href="" target="_blank" className="newsletter-btn" variant="outline-secondary">Join Our Newsletter</a>
          </div>
        </div>
      </BGImage>
    </div>
  );
}
