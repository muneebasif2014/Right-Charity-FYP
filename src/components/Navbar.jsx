import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { lo } from "../assets";
import { navlinks } from "../constants";
import jQuery from "jquery";
import $ from "jquery";
import ScrollToTop from "react-scroll-to-top";
import Web3 from "web3";

const { ethers } = require('ethers');

// Create a web3 instance
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');


const contractAbi = require('./CharityCrowdfunding.json');
const contractAddress = '0x988dcfea132d51cb68b1a73a4772d6ddad768552'; // replace with your contract address
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Call the addProject function
async function addProject(name, goalAmount) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.addProject(name, goalAmount).send({ from: accounts[0] });
}

// Call the fundProject function
async function fundProject(projectId, amount) {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.fundProject(projectId, amount).send({ from: accounts[0], value: amount });
}

// Call the withdrawFunds function
async function withdrawFunds() {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.withdrawFunds().send({ from: accounts[0] });
}

// Call the getProjects function
async function getProjects() {
  const result = await contract.methods.getProjects().call();
  console.log(result); // Display the list of projects
}

const Navbar = () => {
  const [active, Setactive] = useState("Home");
  jQuery(window).scroll(function () {
    ///for stickey navbar
    if (jQuery(window).scrollTop() >= 10) {
      jQuery("#home").addClass("fixed-header ");
    } else {
      jQuery("#home").removeClass("fixed-header");
    }
  });
  const route = window.location.pathname;
  console.log(route);
 
  const [walletConnected, setWalletConnected] = useState(false);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Metamask not detected.");
    }
  };

  return (
    <>
      <ScrollToTop smooth id="arrow"></ScrollToTop>
      <header id="home">
        <div className="">
          <div className="top-bar">
            <div className="nav-col">
              <div className="logo">
                <img src={lo} alt="my_logo" />
              </div>
              <div className="menu">
                <Link
                  to="/"
                  className={route === "/" ? "active" : "none"}
                  onClick={() => Setactive("Home")}
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className={route === "/projects" ? "active" : "none"}
                  onClick={() => Setactive("projects")}
                >
                  Projects
                </Link>
                <Link
                  to="/investing"
                  className={route === "/investing" ? "active" : "none"}
                  onClick={() => Setactive("investing")}
                >
                  Start Donating
                </Link>
                <Link
                  to="/dashboard"
                  className={route === "/dashboard" ? "active" : "none"}
                  onClick={() => Setactive("dashboard")}
                >
                  Dashboard
                </Link>
                <Link
                  to="/login"
                  className={route === "/login" ? "active" : "none"}
                  onClick={() => Setactive("login")}
                >
                  Login
                </Link>
              </div>
              <div className="clear"></div>
            </div>
            <div className="cnt-info-col">
            <button onClick={connectWallet}>
      {walletConnected ? "Connected" : "Connect Metamask "}
    </button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
