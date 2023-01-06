import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import "../cssfiles/responsivefront.css";
import { lo } from "../assets";
import { navlinks } from "../constants";
import jQuery from "jquery";
import $ from "jquery";
import ScrollToTop from "react-scroll-to-top";

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
  const route= window.location.pathname;
  console.log(route);

  return (
    <>
      <ScrollToTop smooth id="arrow">
      </ScrollToTop>
      <header id="home">
        <div className="">
          <div className="top-bar">
            <div className="nav-col">
              <div className="logo">
                <img src={lo} alt="my_logo" />
              </div>
              <div className="menu">
                <Link to="/"
                    className={route === "/" ? "active" : "none"}
                    onClick={() => Setactive("Home")}>Home</Link>
                <Link to="/projects"
                    className={route === "/projects" ? "active" : "none"}
                    onClick={() => Setactive("projects")}>Projects</Link>
                <Link to="/investing"
                    className={route === "/investing" ? "active" : "none"}
                    onClick={() => Setactive("investing")}>Start Investing</Link>
                <Link to="/dashboard"
                    className={route === "/dashboard" ? "active" : "none"}
                    onClick={() => Setactive("dashboard")}>Dashboard</Link>
                <Link to="/login"
                    className={route === "/login" ? "active" : "none"}
                    onClick={() => Setactive("login")}>Login</Link>
              </div>
              <div className="clear"></div>
            </div>
            <div className="cnt-info-col">
              <button>Connect Wallet</button>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
