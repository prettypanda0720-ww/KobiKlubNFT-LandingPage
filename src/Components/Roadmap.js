import { React, useRef } from "react";
import { Container } from "react-bootstrap";
import RoadmapStep from "./RoadmapStep";
export default function Roadmap() {
  const percent_5_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            We will make our first round of Make-A-Wish donations and Airdrop a Golden Star NFT to holders of the first 350 Mints, this will be an additional NFT to signify that you’re a contributor of the first Make-A-Wish Donations. Our collection will also be listed on Rarity Sniper/Rarity Tools.
          </p>
        </li>
      </ul>`;
  const percent_10_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            Giving back to our community early is a priority. We will deposit 20% of the revenue generated from the first 700 mints into our community wallet and open our MMYC Holders channel to discuss post sale objectives.
          </p>
        </li>
      </ul>`;
  const percent_20_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            3 ETH GIVEAWAY
          </p>
        </li>
        <li>
          <p className="label">
            1 Lucky Holder will be drawn randomly to receive 3ETH. To be eligible, the winner must be HOLDING one of the first 1400 MMYC NFTs.
          </p>
        </li>
      </ul>`;
  const percent_40_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            MMYC 3D FIGURE GIVEAWAY
          </p>
        </li>
        <li>
          <p className="label">
            10 Lucky holders will Win a MMYC Gift pack with a 3D collectible figure of their NFT. Winners will be announced at 40% Sold, Production will start after MMYC NFT’s have been revealed.
          </p>
        </li>
      </ul>`;
  const percent_60_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            We will create our first video for our new MMYC YouTube channel - The video will document the MMYC Team meeting with the recipients of the first Make-A-Wish Donations show the impact it had on the children.
          </p>
        </li>
      </ul>`;
  const percent_80_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            10 ETH COMMUNITY GIVEAWAY
          </p>
        </li>
        <li>
          <p className="label">
            5 Lucky holders will receive 2ETH each. All winners will be drawn randomly and you must be a current holder of the first 5600 MMYC NFTs to be eligible.
          </p>
        </li>
      </ul>`;
  const percent_100_summary = `
      <ul className="summary">
        <li>
          <p className="label">
            LETS CELEBRATE
          </p>
        </li>
        <li>
          <p className="label">
            To Celebrate we will complete all Make-A-Wish Donations and a Large donation to a chosen children’s charity. We will also deposit 20% of our overall revenue into our community wallet. This will be used for all Post Sale objectives.
          </p>
        </li>
      </ul>`;
  return (
    <div id="roadmap" className="roadmap-wrapper">
      <Container>
        <p className="font-xxl white-color headingTxt mt-5 mb-4 text-center">
          <b>ROADMAP</b>
        </p>
        <p className="font-md white-color mt-3 mb-3">
          Welcome to the Meta Mini Youth Club. We are proud to introduce our Roadmap. Our Roadmap is split in 2 stages, our Sales Milestones and Post Sale Development.
        </p>
        <p className="font-md white-color mt-3 mb-3">
          Meta Minis Youth Club or MMYC is an exciting new brand birthed through an NFT project. Holders will generate passive income which will benefit their children and their families whilst also contributing to saving children’s lives and making poorly children’s dreams come true.
        </p>
        <p className="font-md white-color mt-3 mb-3">
          20% of our overall revenue will be deposited into our Community Wallet. Protecting our holders investments, keeping a healthy floor price and continuing to give back to our holders is our priority.
        </p>
        <p className="font-md white-color mt-3 mb-3">
          10% of our overall revenue will be donated to our Make-A-Wish Children and chosen children’s charity. Our community will submit their Make-A-Wish suggestions in our Make-A-Wish Channel and we will fulfil as many wishes as we can. 
        </p>
        <p className="font-lg white-color mt-5 mb-5 text-center" style={{fontSize: "25px"}}>
          <b>SALES MILESTONES</b>
        </p>
        <RoadmapStep
          progress={5}
          percent="5%"
          title="5% SOLD"
          detail={percent_5_summary}
        />
        <RoadmapStep
          progress={10}
          percent="10%"
          title="10% SOLD"
          detail={percent_10_summary}
        />
        <RoadmapStep
          progress={20}
          percent="20%"
          title="20% SOLD"
          detail={percent_20_summary}
        />
        <RoadmapStep
          progress={40}
          percent="40%"
          title="40% SOLD"
          detail={percent_40_summary}
        />
        <RoadmapStep
          progress={60}
          percent="60%"
          title="60% SOLD"
          detail={percent_60_summary}
        />
        <RoadmapStep
          progress={80}
          percent="80%"
          title="80% SOLD"
          detail={percent_80_summary}
        />
        <RoadmapStep
          progress={100}
          percent="100%"
          title="100% SOLD"
          detail={percent_100_summary}
        />
        <h2
          className="mt-5 text-white font-xl"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Post Sale Development
        </h2>
        <div className="content mb-5">
          <p className="text-white" style={{fontWeight: "bold"}}>Make-A-Wish</p>
          <ul className="text-white">
            <li>
              <p className="font-md">0
                Visiting and Documenting the Recipients of the MMYC Community’s charity donations.
              </p>
            </li>
          </ul>
          <p className="text-white" style={{fontWeight: "bold"}}>Community</p>
          <ul className="text-white">
            <li>
              <p className="font-md">
                2.5% of our secondary sales will go directly to our community wallet.
              </p>
            </li>
          </ul>
          <p className="text-white" style={{fontWeight: "bold"}}>MMYC Generation 2</p>
          <ul className="text-white">
            <li>
              <p className="font-md">
                Finalise MMYC Generation 2 collection. We created a BRAND with MMYC Not just a project. Which is why we used 100% custom characters and chose not to use any other inspiration from Disney/Marvel for our legendary characters. MMYC Generation 2 is also custom and unique and will launch shortly after MMYC Generation 1 Sell out. Details will be discussed with our holders in our Discord.
              </p>
            </li>
          </ul>
          <p className="text-white" style={{fontWeight: "bold"}}>Metaverse Land Purchase</p>
          <ul className="text-white">
            <li>
              <p className="font-md">
                Join our 3D Avatars and MMYC community in the first ever Youth Club in the Metaverse. MMYC Holders will decide on our Land and make the purchase from the community wallet.
              </p>
            </li>
          </ul>
          <p className="text-white" style={{fontWeight: "bold"}}>Meta Minis Play to Earn Game</p>
          <ul className="text-white">
            <li>
              <p className="font-md">
                Our Meta Minis Game is in the early stages of Development and will be finalised post public sale with help from our holders. Our goal is to introduce the children of OUR future, to THE FUTURE. The Metaverse. Holders will have exclusive access to our interactive Family game, using their Meta Minis as 3D Avatars.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
