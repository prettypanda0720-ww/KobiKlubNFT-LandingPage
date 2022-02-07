import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import { Link } from "react-router-dom";
import { Navbar as Nb, Container, Nav, Image, Button } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { useWalletContext } from "../contexts/wallet";
import { selectWalletAuth } from "../redux/walletauth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { truncateAddress } from "../utils/address";

export default function Navbar() {
  const [addCss, setAddCss] = useState("");
  const [isWrongNetwork, setIsWrongNetwork] = useState();
  
  const walletContext = useWalletContext();
  const { connect, disconnect } = walletContext;
  const { address, provider, web3Provider, signer, chainId } = useSelector(selectWalletAuth);
  const dispatch = useDispatch();

  
  useEffect(() => {
    if (address) {
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

  // window.localStorage.setItem("active", active);

  const renderButton = (
    <>
      {address ? (
        <div className="connectedWallet">
          <div className="walletAddress">{truncateAddress(address)}</div>
          <button
            className="disConnectWallet"
            onClick={disconnect}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button className="connectWallet" onClick={connect}>
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
