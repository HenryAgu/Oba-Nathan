import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col px-2 py-14">
        <h5>OBA NATHAN</h5>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <FaBehanceSquare />
          <FaXTwitter />
          <FaFacebook />
          <FaSquareInstagram />
        </div>
        <p className="text-sm">Made by Henry Agu</p>
      </div>
    </div>
  );
};

export default Footer;
