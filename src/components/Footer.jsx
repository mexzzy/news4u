import React from "react";
import { FooterWrapper, FooterBox1,FooterBox2 } from "./Style";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <FooterBox1>
        <span>privacy policy</span>
        <span>Terms of service</span>
        <span>copyright policy</span>
        <span>data policy</span>
        <span>accessibility</span>
        <span>help</span>
      </FooterBox1>
      <FooterBox2>
        <div>
          <Link to="/" className="link">
            politics
          </Link>
          <Link to="/world" className="link">
            world
          </Link>
          <Link to="/economy" className="link">
            economy
          </Link>
          <Link to="/scienceAndTech" className="link">
            science & tech
          </Link>
          <Link to="/business" className="link">
            business
          </Link>
        </div>
        <div>
          <Link to="/travel" className="link">
            travel
          </Link>
          <Link to="/climate" className="link">
            climate
          </Link>
          <Link to="/lifestyle" className="link">
            lifestyle
          </Link>
          <Link to="/food" className="link">
            food
          </Link>
          <Link to="/sport" className="link">
            sport
          </Link>
        </div>
      </FooterBox2>
    </FooterWrapper>
  );
}

export default Footer;
