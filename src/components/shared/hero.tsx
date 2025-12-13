import Image from "next/image";
import React from "react";
import { ComponentProps } from "../type";



const Hero = ({image, title}:ComponentProps) => {
  return (
    <div className="relative group overflow-hidden h-[698px] w-full">
      <Image
        src={image}
        alt="image-header"
        width={1890}
        height={698}
        className="object-cover h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold font-vogue transition-opacity duration-500">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
