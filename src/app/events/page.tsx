import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const gtSuperDisplay = localFont({
  src: "../fonts/GT-Super-Display-Regular-Trial.otf",
  variable: "--font-vogue",
  weight: "100 900",
});

interface PhotoGallery {
  title: string;
  image: string;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sorts-milly-goudy",
});

const photoGallery: PhotoGallery[] = [
  {
    title: "Sunset Bliss",
    image: "/images/image.webp",
  },
  {
    title: "Mountain Peaks",
    image: "/images/image.webp",
  },
  {
    title: "City Lights",
    image: "/images/image.webp",
  },
  {
    title: "City Lights",
    image: "/images/image.webp",
  },
  {
    title: "City Lights",
    image: "/images/image.webp",
  },
  {
    title: "City Lights",
    image: "/images/image.webp",
  },

  {
    title: "City Lights",
    image: "/images/image.webp",
  },
  {
    title: "City Lights",
    image: "/images/image.webp",
  },
];

const EventPage = () => {
  return (
    <main className="px-4 md:px-14 py-5">
      <div className="flex justify-between items-baseline">
        <Link href="/" className="uppercase font-vogue text-2xl md:text-4xl font-black">oba nathan</Link>
        <Link href="tel:+2349091748665">
          <button
            className={`${gtSuperDisplay.className} border-2 font-[sorts] mt-5 border-black w-fit mx-auto text-center py-3 px-5 text-xs hover:bg-black hover:text-white  transition duration-300 ease-in-out tracking-wider`}
          >
            GET IN TOUCH
          </button>
        </Link>
      </div>
      <div className="mt-20 text-center">
        <h1 className={`${gtSuperDisplay.className} text-4xl lg:text-7xl`}>Events</h1>
      </div>
      <div className="my-10 md:my-20 grid grid-cols-1 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-y-20">
        {photoGallery.map((photo, index) => (
          <div className="group flex flex-col gap-y-5" key={index}>
            <Image
              src={photo.image}
              alt="image"
              width={350}
              height={500}
              className="w-full md:h-[450px] grayscale-0 group-hover:grayscale transition duration-300 ease-in-out"
            />
            <p
              className={`text-center text-base text-black ${roboto.className} font-normal`}
            >
              Marilena+Julius
            </p>
          </div>
        ))}
      </div>
      <div className="my-10">
        <h1 className={`text-5xl font-semibold ${gtSuperDisplay.className} leading-[60px]`}>
          Have a project? <br />
          Let&lsquo;s do this, <Link href="tel:+2349091748665" className="underline">together!</Link>
        </h1>
      </div>
    </main>
  );
};

export default EventPage;
