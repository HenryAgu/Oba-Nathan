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
      <div className="px-4 lg:px-8 xl:px-16 flex justify-between relative h-screen">
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
              className={`w-[320px] h-[180px] aspect-[320/180] md:w-[${image.width}px] md:h-[${image.height}px] md:aspect-[${image.width}/${image.height}] grayscale-0 group-hover:grayscale transition duration-300 ease-in-out`}
            />
          </div>
        ))}
      </div>
      <div className="relative mt-[-180px]">
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
