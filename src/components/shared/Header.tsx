import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const gtSuperDisplay = localFont({
  src: "../../app/fonts/GT-Super-Display-Regular-Trial.otf",
  variable: "--font-vogue",
  weight: "100 900",
});

const Header = () => {
  return (
    <div className="flex justify-between items-baseline">
      <Link
        href="/"
        className="uppercase font-vogue text-2xl md:text-4xl font-black"
      >
        oba nathan
      </Link>
      <Link href="tel:+2349091748665">
        <button
          className={`${gtSuperDisplay.className} border-2 font-[sorts] mt-5 border-black w-fit mx-auto text-center py-3 px-5 text-xs hover:bg-black hover:text-white  transition duration-300 ease-in-out tracking-wider`}
        >
          GET IN TOUCH
        </button>
      </Link>
    </div>
  );
};

export default Header;
