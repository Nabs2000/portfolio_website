import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/nabeel-sabzwari-899697167/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Nabs2000" target="_blank">
        <BsGithub />
      </a>
      <a href="https://facebook.com/nabeel.sabzwari" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
