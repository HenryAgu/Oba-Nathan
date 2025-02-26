import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[95%] mx-auto pt-7">
      <div className="flex xl:flex-row justify-between border-[#989898] border-2 border-t-0 border-x-0 pb-3">
        <h3 className="text-3xl font-vogue font-black">OBA NATHAN</h3>
        <div className="flex items-center justify-start gap-x-3">
          <Link
            href="https://x.com/Oba__Nathan?t=GblSQE7bfeLs3f3i9mrLPQ&s=09"
            target="_blank"
          >
            <Image
              src="/images/x.svg"
              alt="x-icon"
              width={20}
              height={20}
              className="grayscale-0"
            />
          </Link>
          <Link
            href="https://www.facebook.com/reno.jnr.008?mibextid=ZbWKwL"
            target="_blank"
          >
            <Image
              src="/images/instagram.svg"
              alt="x-icon"
              width={20}
              height={20}
              className="grayscale-0"
            />
          </Link>

          <Link
            href="https://www.instagram.com/oba_nathan?igsh=MTVsNms3Ync0MTcw"
            target="_blank"
          >
            <Image
              src="/images/facebook.svg"
              alt="x-icon"
              width={20}
              height={20}
              className="grayscale-0"
            />
          </Link>
          <Link href="" target="_blank">
            <Image
              src="/images/behance.svg"
              alt="x-icon"
              width={20}
              height={20}
              className="grayscale-0"
            />
          </Link>
        </div>
      </div>
      <div className="py-3 pb-10 md:pb-16 text-center xl:text-left">
        <p className="text-sm font-[sorts]">Made by <b className="text-[#454545]">Henry Agu</b></p>
      </div>
    </div>
  );
};

export default Footer;
