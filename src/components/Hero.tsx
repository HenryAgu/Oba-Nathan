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

const heroImages: HeroImages[] = [
  {
    path: "/images/image.webp",
    top: 0,
    width: 130,
    height: 196,
  },
  {
    path: "/images/image.webp",
    top: 320,
    width: 197,
    height: 295,
  },
  {
    path: "/images/image.webp",
    top: 100,
    width: 200,
    height: 299,
  },
  {
    path: "/images/image.webp",
    top: 400,
    width: 200,
    height: 299,
  },
  {
    path: "/images/image.webp",
    top: 208,
    width: 210,
    height: 315,
  },
];

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <main>
      <div className="px-4 md:px-16 flex justify-between relative h-screen">
        {heroImages.map((image, index) => (
          <div key={index} className="relative" style={{ top: `${image.top}px` }}>
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
      <h1>{id} try</h1>
    </main>
  );
};


export default Hero;
