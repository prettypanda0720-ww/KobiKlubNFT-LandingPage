import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function About() {
  return (
    <div id="about" className="about-container pt-5 pb-5">
      <Container>
        <div className="about-left">
          <Row>
            {/* <CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} /> */}
            <Col lg={5} md={12} className="p-4">
              <Row>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="image/b1.png" className="w-100 " rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="image/b2.png" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="image/b3.png" className="w-100" rounded />
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="mb-3 customPadding">
                  <Image src="image/b4.png" className="w-100" rounded />
                </Col>
              </Row>
            </Col>
            <Col lg={7} className="p-4">
              <div className="text-black">
                {/* <p className="mb-0 font-lgr aboutHeading">ABOUT</p> */}
                {/* <span class="label-line"></span> */}
                <p
                  className="mb-0 font-xxl"
                  style={{ fontWeight: "bold" }}
                >
                  ABOUT US
                </p>
                <p className="mb-0 font-lgr aboutTxt">
                  The Meta Mini Youth Club or MMYC is an exciting new brand birthed through an NFT Project. Welcoming our children into the Metaverse. Welcoming OUR future into THE future.
                </p>
                <p className="mt-2 font-lgr aboutTxt">
                  All the way from the Meta Mini Youth Club the Meta Minis have arrived and are ready to make a huge impact. Only 7000 Meta Minis will be minted as ERC-721 tokens on the Ethereum blockchain.
                </p>
                <p className="mt-2 aboutTxt">
                  As a youth club member you are guaranteed many long and exciting adventures ahead. Not only will you be generating passive income and making critically ill children's wishes come true. You will be helping to shape the ethos of Web3.0 into an opportunistic place for the next generation. Encouraging those to foster an open conversation about the benefits of the online world and our future within the metaverse.
                </p>
                <p className="mt-2 aboutTxt">
                  Adopt a Meta Mini and join us on our journey to build a brand for the next generation.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
