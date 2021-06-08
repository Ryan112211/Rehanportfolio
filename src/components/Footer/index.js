import React from "react";
import SocialConnect from "../UI/SocialConnect";
import convo from "../../assets/images/conversation.png";
import "./style.css";
/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="container">
      <div className="flexRow flexCol justify-sb align-center" style={{ margin: "50px 0" }}>
        <div className="mtb-10">
          <SocialConnect></SocialConnect>
        </div>
        <div className="menus mtb-10">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="convocontainer primaryBgColor mtb-10">
          <img src={convo} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
