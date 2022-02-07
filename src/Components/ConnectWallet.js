import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Row, Col, Container } from "react-bootstrap";
import Clock from "./Clock";
import ContractAbi from "../Abis/MetaMiniYouthClubNFT.json";
import web3 from "web3";

import { ethers } from "ethers";
import { selectWalletAuth } from "../redux/walletauth/selectors";
import { useSelector } from "react-redux";
import { PRESALE_PRICE, PUBLICSALE_PRICE } from "../config";
import { getMerkleProof } from "../utils/merkleTree";
require("dotenv").config();

export default function ConnectWallet() {
  const [clicks, setClicks] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const { address,signer, chainId } =
    useSelector(selectWalletAuth);

  const IncrementItem = () => {
    if (currentStage === 1) {
      if (clicks < 5) {
        setClicks(clicks + 1);
      }
    } else if (currentStage === 2) {
      if (clicks < 10) {
        setClicks(clicks + 1);
      }
    }
  };

  const DecreaseItem = () => {
    if (clicks > 1) {
      setClicks(clicks - 1);
    }
  };

  const validNetwork =
    chainId === parseInt(process.env.REACT_APP_CHAIN_ID) ? true : false;

  useEffect(() => {
    async function init() {
      if (address) {
        const MetaMiniYouthClubNFTContract = new ethers.Contract(
          process.env.REACT_APP_NFT_ADDRESS,
          ContractAbi,
          signer
        );
        let stageVal = web3.utils.toDecimal(
          await MetaMiniYouthClubNFTContract.getStage()
        );
        setCurrentStage(stageVal);
      }
    }
    init();
  }, [validNetwork, address, signer]);

  async function PresaleMint() {
    const MetaMiniYouthClubNFTContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      signer
    );

    // console.log("signer", await provider.getSigner().getAddress());
    let mintedCount = web3.utils.toDecimal(
      await MetaMiniYouthClubNFTContract.balanceOf(address)
    );
    if (mintedCount + clicks > 5) {
      toast.error("OVERFLOW 5 TOKENS");
      return;
    }
    const presalePrice = PRESALE_PRICE * clicks;

    const price = ethers.utils.parseEther(presalePrice.toString());
    const balances = await signer.getBalance();

    if (price.div(balances).toNumber() > 1) {
      toast.error("Insufficient Funds!");
      return;
    }

    try {
      await MetaMiniYouthClubNFTContract.mintWhitelist(
        clicks,
        getMerkleProof(address, "presale"),
        { value: price }
      )
        .then((tx) => {
          return tx.wait().then(
            (receipt) => {
              // This is entered if the transaction receipt indicates success
              console.log("receipt", receipt);
              toast.success("Presale Success!");
              return true;
            },
            (error) => {
              console.log("error", error);
              toast.error("Presale Fail!");
            }
          );
        })
        .catch((error) => {
          console.log("error", error);
          if (error.message.indexOf("whitelist") > 0) {
            toast.error("You aren't whitelisted!");
          } else if (error.message.indexOf("signature")) {
            toast.error("You canceled transaction!");
          } else {
            toast.error("Transaction Error!");
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  async function PublicMint() {
    const MetaMiniYouthClubNFTContract = new ethers.Contract(
      process.env.REACT_APP_NFT_ADDRESS,
      ContractAbi,
      signer
    );

    let pubsalePrice = PUBLICSALE_PRICE * clicks;
    let price = ethers.utils.parseEther(pubsalePrice.toString());
    const balances = await signer.getBalance();

    let compareResult = price - balances;
    console.log("compareResult", compareResult);
    if (compareResult > 0) {
      toast.error("Insufficient Funds!");
      return;
    }

    try {
      await MetaMiniYouthClubNFTContract.publicMint(clicks, {
        value: price,
      })
        .then((tx) => {
          return tx.wait().then(
            (receipt) => {
              // This is entered if the transaction receipt indicates success
              console.log("receipt", receipt);
              toast.success("PublicSale Success!");
              return true;
            },
            (error) => {
              console.log("error", error);
              toast.error("PublicSale Fail!");
            }
          );
        })
        .catch((error) => {
          console.log(error);
          if (error.message.indexOf("signature")) {
            toast.error("You canceled transaction!");
          } else {
            toast.error("Transaction Error!");
          }
        });
    } catch (error) {
      console.log("public sale error", error);
    }
  }

  const MintButton = () => {
    if (address) {
      switch (currentStage) {
        case 0:
          return (
            <Col md={12} className="text-center mt-5">
              <Col md={12} className="text-center mt-5">
                <h2>MINT on Feburary 7th 5pm EST</h2>
              </Col>

              <Col md={12} className="text-center mt-5">
                <Clock class_name="mint-section" />
              </Col>
            </Col>
          );
        case 1:
          return (
            <>
              <Col md={12} className="text-center mt-5">
                <h2>PRESALE</h2>
              </Col>

              <Col md={12} className="text-center mt-5">
                <div className="connectcounter">
                  <div className="buttonLeft">
                    <button
                      className="down_count btn btn-info"
                      title="Down"
                      onClick={DecreaseItem}
                    >
                      <i
                        className="fa fa-minus"
                        style={{ color: "#FFCC00" }}
                      ></i>
                    </button>

                    <input
                      className="counter"
                      type="text"
                      value={clicks}
                      disabled
                    />

                    <button
                      className="up_count btn btn-info"
                      title="Up"
                      onClick={IncrementItem}
                    >
                      <i
                        className="fa fa-plus"
                        style={{ color: "#FFCC00" }}
                      ></i>
                    </button>
                  </div>
                  <span className="presale-mint" onClick={PresaleMint}>
                    mint
                  </span>
                </div>
                <p className="counterBelowTxt">MAX 5 PER WALLET</p>
              </Col>
              {/* <Col md={12} className="text-center mt-5">
                <h2>
                  The POAP airdrop of an NFT will be sent to the first 500
                  minters
                </h2>
                <div className="connectcounter">
                  <span className="presale-mint" onClick={PresaleMint}>
                    Claim
                  </span>
                </div>
              </Col> */}
            </>
          );
        case 2:
          return (
            <>
              <Col md={12} className="text-center mt-5">
                <h2>PUBLIC SALE</h2>
              </Col>
              <Col md={12} className="text-center mt-5">
                <div className="connectcounter">
                  <div className="buttonLeft">
                    <button
                      className="down_count btn btn-info"
                      title="Down"
                      onClick={DecreaseItem}
                    >
                      <i
                        className="fa fa-minus"
                        style={{ color: "#FFCC00" }}
                      ></i>
                    </button>

                    <input
                      className="counter"
                      type="text"
                      value={clicks}
                      disabled
                    />

                    <button
                      className="up_count btn btn-info"
                      title="Up"
                      onClick={IncrementItem}
                    >
                      <i
                        className="fa fa-plus"
                        style={{ color: "#FFCC00" }}
                      ></i>
                    </button>
                  </div>
                  <span className="presale-mint" onClick={PublicMint}>
                    mint
                  </span>
                </div>
                <p className="counterBelowTxt">MAX 10 PER WALLET</p>
              </Col>
            </>
          );
        case 3:
          return (
            <Col md={12} className="text-center mt-5">
              <h2>Buy on OpenSea</h2>
            </Col>
          );
        default:
          return;    
      }
    } else {
      return (
        <Col md={12} className="text-center mt-5">
          <h2>MINTING IS NOT STARTED YET</h2>
        </Col>
      );
    }
  };

  return (
    <div id="ConnectWallet">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "white",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
          error: {
            style: {
              background: "white",
              color: "black",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
        }}
      />
      <Container>
        <Row>{MintButton()}</Row>
      </Container>
    </div>
  );
}
