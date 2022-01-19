import React, { useState } from "react";
import "antd/dist/antd.css";
import "./styles/index.less";
import { Layout } from "antd";
import AppHeader from "./components/header";
import RoadWards from "./components/sections/roarwards";
import About from "./components/sections/about";
import Story from "./components/sections/story";
import Rare from "./components/sections/rare";
import Mission from "./components/sections/mission";
import RoadMap from "./components/sections/roadmap";
import OurTeam from "./components/sections/ourteam";
import FAQ from "./components/sections/faq";
import Discord from "./components/sections/discord";
import AppFooter from "./components/footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <RoadWards />
        <About />
        <Story />
        <Rare />
        <Mission />
        <RoadMap />
        <OurTeam />
        <FAQ />
        <Discord />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
