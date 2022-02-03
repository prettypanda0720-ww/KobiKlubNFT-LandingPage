import React from "react";
import { Container, Image } from "react-bootstrap";

export default function FuturePlan() {
  return (
    <div id="futureplan">
      <Container>
        <h4 className="text-white" style={{ textAlign: "center" }}>
          Post Sale Development
        </h4>
        <div className="content">
          <p className="sub-title mt-30">Charity</p>
          <ul className="summary">
            <li>
              <p className="label">
                Visiting and Documenting the Recipients of the MMYC
                Community’s charity donations. 
              </p>
            </li>
          </ul>
          <p className="sub-title mt-30">Community</p>
          <ul className="summary">
            <li>
              <p className="label">
                2.5% Secondary sales deposited into community wallet.
              </p>
            </li>
            <li>
              <p className="label">MMYC Generation 2 collection begins</p>
            </li>
            <li>
              <p className="label">
                MMYC 3D Figure Store opening . All holders can purchase a 3D
                Collectible of their NFT - 100% of the sales will go
                directly to the community wallet. 
              </p>
            </li>
            <li>
              <p className="label">
                Meta Mini Youth Club’s Metaverse Land purchase. Join our our
                3D Avatars and MMYC community in the first ever Youth Club
                in the Metaverse.
              </p>
            </li>
            <li>
              <p className="label">
                MMYC Game Development - Introducing our children’s to the
                Meta Mini Youth Club in the Metaverse
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
