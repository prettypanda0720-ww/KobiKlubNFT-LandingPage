import React, { useState } from "react";
import { Typography, Collapse, Row, Col, Image } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { faqData } from "./data";

import "antd/dist/antd.css";
import "./styles.less";

const { Text } = Typography;
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ = () => {
  return (
    <div className="faq-wrapper" id="faq">
      <div className="container-fluid">
        <div className="faq-content-wrapper">
          <h1 className="faq-title">FAQ</h1>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
            className="site-collapse-custom-collapse mt-30"
          >
            {faqData.map((item, index) => {
              return (
                <Panel
                  header={item.quiz}
                  key={index}
                  className="site-collapse-custom-panel"
                >
                  <p>{item.answer}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
