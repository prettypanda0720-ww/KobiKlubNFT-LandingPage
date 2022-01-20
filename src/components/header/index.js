import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";
import Logo from "../../assets/images/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import "./styles.less";

const { Link } = Anchor;

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="mobileHidden">
        <div className="header">
          <div className="logo">
            <img src={Logo} />
          </div>
          <Anchor targetOffset="65">
            <Link href="#about" title="About us" className="navItem" />
            {/* <Link href="#traits" title="Traits" className="navItem" /> */}
            <Link href="#roadmap" title="Roadmap" className="navItem" />
            <Link href="#team" title="Team" className="navItem" />
            <Link href="#faq" title="FAQS" className="navItem" />
            <Link href="#socials" title="Socials" className="navItem" />
            <Link href="#mint" title="MINT" className="navItem" />
          </Anchor>
        </div>
      </div>
      <div className="mobileVisible">
        <div className="header">
          <div className="logo">
            <img src={Logo} />
          </div>
          <Button
            className="btn-mobile"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#about" title="About us" className="navItem" />
              {/* <Link href="#traits" title="Traits" className="navItem" /> */}
              <Link href="#roadmap" title="Roadmap" className="navItem" />
              <Link href="#team" title="Team" className="navItem" />
              <Link href="#faq" title="FAQS" className="navItem" />
              <Link href="#socials" title="Socials" className="navItem" />
              <Link href="#mint" title="MINT" className="navItem" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
export default AppHeader;
