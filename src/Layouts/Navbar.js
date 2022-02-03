import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import { Link } from "react-router-dom";
import { Navbar as Nb, Container, Nav, Image, Button } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../utils/connector";
import { useEagerConnect } from "../utils/hooks";

export default function Navbar() {
  const [addCss, setAddCss] = useState("");
  const [isWrongNetwork, setIsWrongNetwork] = useState();
  // useEagerConnect();
  const { chainId, active, activate, deactivate, account } = useWeb3React();
  const context = useWeb3React();

  // useEagerConnect();

  useEffect(() => {
    if (active) {
      if (chainId !== parseInt(process.env.REACT_APP_CHAIN_ID)) {
        toast.error(
          "You are on wrong network. Please switch to Ethereum Mainnet to continue"
        );
        setIsWrongNetwork(true);
      } else {
        setIsWrongNetwork(false);
      }
    }
  }, [chainId]);

  useEffect(() => {
    if (window.innerWidth < 985) {
      setAddCss("header-navbar-nav ");
    }
  }, []);

  async function connect(injected) {
    activate(injected);
  }

  async function disConnect(injected) {
    deactivate(injected);
  }
  // window.localStorage.setItem("active", active);

  const renderButton = (
    <>
      {active ? (
        <div className="connectedWallet">
          <div className="walletAddress">{account}</div>
          <button
            className="disConnectWallet"
            onClick={() => disConnect(injected)}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button className="connectWallet" onClick={() => connect(injected)}>
          Connect
        </button>
      )}
    </>
  );

  return (
    <Nb expand="lg" variant="dark" sticky="top">
      <Container>
        <Nb.Brand href="#" className="mr-4">
          <Image src="logo.png" style={{height: "55px"}}/>
        </Nb.Brand>
        <Nb.Toggle aria-controls="basic-navbar-nav" />
        <Nb.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className="header-btn">
              About Us
            </Nav.Link>
            <Nav.Link href="#traits" className="header-btn">
              Traits
            </Nav.Link>
            <Nav.Link href="#roadmap" className="header-btn">
              Roadmap
            </Nav.Link>
            <Nav.Link href="#team" className="header-btn">
              Team
            </Nav.Link>
            <Nav.Link href="#faq" className="header-btn">
              FAQ
            </Nav.Link>
            <Nav.Link href="#socials" className="header-btn">
              Socials
            </Nav.Link>
            <Nav.Link href="#" className="header-btn">
              <div className="walletArea mobileShow">{renderButton}</div>
            </Nav.Link>
          </Nav>
        </Nb.Collapse>
        <div className="walletArea mobileHidden">{renderButton}</div>
      </Container>
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
    </Nb>
  );
}
