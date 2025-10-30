import Link from "next/link";
import React from "react";
import InstagramIcon from "../icons/instagram";
import XIcon from "../icons/x";
import FacebookIcon from "../icons/facebook";
import BehanceIcon from "../icons/behance";

interface SocialMedia {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const socialMedia: SocialMedia[] = [
  {
    title: "Instagram",
    icon: <InstagramIcon size={26} />,
    path: "https://www.instagram.com/oba_nathan?igsh=MTVsNms3Ync0MTcw",
  },
  {
    title: "x",
    icon: <XIcon size={18} />,
    path: "https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon size={26} />,
    path: "https://www.facebook.com/reno.jnr.008?mibextid=ZbWKwL",
  },
  {
    title: "Instagram",
    icon: <BehanceIcon size={22} />,
    path: "https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09",
  },
];

const Footer = () => {
  return (
    <div className="w-[95%] mx-auto pt-7">
      <div className="flex xl:flex-row justify-between border-[#989898] border-2 border-t-0 border-x-0 pb-3">
        <h3 className="text-3xl font-vogue font-black">OBA NATHAN</h3>
        <div className="flex items-center justify-start gap-x-3">
          {socialMedia.map((item,index) => (
            <Link
              href="https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09"
              target="_blank"
              key={index}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-3 pb-10 md:pb-16 text-center xl:text-left">
        <p className="text-sm font-[sorts]">
          Made by <b className="text-[#454545]">Henry Agu</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
