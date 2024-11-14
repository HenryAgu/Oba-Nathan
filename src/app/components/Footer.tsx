import Link from "next/link";
import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between gap-x-4 w-[95%] mx-auto pb-10 xl:pb-14 xl:py-14">
      <h1 className="text-xl font-[sorts] font-black">OBA NATHAN</h1>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-end gap-x-2">
          <Link
            href="https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09"
            target="_blank"
          >
            <FaXTwitter className="text-xl" />
          </Link>
          <Link
            href="https://www.facebook.com/reno.jnr.008?mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook className="text-xl" />
          </Link>

          <Link
            href="https://www.instagram.com/oba_nathan?igsh=MTVsNms3Ync0MTcw"
            target="_blank"
          >
            <FaSquareInstagram className="text-xl" />
          </Link>
          <Link href="" target="_blank">
            <FaBehanceSquare className="text-xl" />
          </Link>
        </div>
        <p className="text-base font-[sorts]">
          Made by <b>Henry Agu</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
