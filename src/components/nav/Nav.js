import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { useState } from "react";
import { BsCardChecklist } from "react-icons/bs";
export function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setActiveNav("#skills")}
      >
        <BsCardChecklist />
      </a>
      <a
        href="#experiences"
        className={activeNav === "#experiences" ? "active" : ""}
        onClick={() => setActiveNav("#experiences")}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiPhoneCall />
      </a>
    </nav>
  );
}
