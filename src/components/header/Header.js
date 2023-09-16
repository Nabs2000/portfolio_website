import React from "react";
import "./header.css";
import CTA from "./CTA";
import PFP from "../../assets/pfp-remove-bg.png";
import HeaderSocials from "./HeaderSocials";
export function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Nabeel Sabzwari</h1>
        <h5 className="text-light">Software Enthusiast</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={PFP} alt="Me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
