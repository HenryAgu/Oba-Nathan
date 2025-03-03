import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

interface HeroImages {
  path: string;
  top: number;
  width: number;
  height: number;
}

interface HeroProps {
  id: string;
}

const gtSuperDisplay = localFont({
  src: "../app/fonts/GT-Super-Display-Regular-Trial.otf",
  variable: "--font-vogue",
  weight: "100 900",
});

const heroImages: HeroImages[] = [
  {
    path: "/images/5.jpg",
    top: 0,
    width: 130,
    height: 196,
  },
  {
    path: "/images/4.jpg",
    top: 320,
    width: 197,
    height: 295,
  },
  {
    path: "/images/3.jpg",
    top: 100,
    width: 200,
    height: 299,
  },
  {
    path: "/images/2.jpg",
    top: 400,
    width: 200,
    height: 299,
  },
  {
    path: "/images/IMG_9597.jpg",
    top: 208,
    width: 210,
    height: 315,
  },
];

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <main>
      <div className="px-4 lg:px-8 xl:px-16 hidden lg:flex justify-between relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="relative"
            style={{ top: `${image.top}px` }}
          >
            <Image
              src={image.path}
              alt="Image"
              width={image.width}
              height={image.height}
              className={`w-[${image.width}px] h-[${image.height}px] aspect-[${image.width}/${image.height}] grayscale-0 group-hover:grayscale transition duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:hidden h-screen px-4">
        <div className="ml-0">
          <Image
            src="/images/1.jpg"
            alt="image"
            width={140}
            height={210}
            className="w-[140px] h-[210px]"
          />
        </div>
        <div className="flex items-end justify-end relative bottom-20 mr-24">
          <Image
            src="/images/2.jpg"
            alt="image"
            width={140}
            height={210}
            className="w-[140px] h-[210px]"
          />
        </div>

        <div className="flex gap-x-2 items-end justify-end mr-48 relative bottom-10">
          <Image
            src="/images/3.jpg"
            alt="image"
            width={140}
            height={210}
            className="w-[140px] h-[210px]"
          />
        </div>

        <div className="flex items-end justify-end mr-10 relative  bottom-40">
          <Image
            src="/images/4.jpg"
            alt="image"
            width={140}
            height={210}
            className="w-[140px] h-[210px]"
          />
        </div>
      </div>
      <div className="relative mt-10 xl:mt-[-180px]">
        <h1
          className={`${gtSuperDisplay.className} text-4xl lg:text-[120px] xl:text-[160px] lg:leading-[120px] xl:leading-[150px] uppercase font-medium text-center`}
        >
          {id.replace(/%20%26%20/g, " & ")}
        </h1>
      </div>
    </main>
  );
};

export default Hero;
