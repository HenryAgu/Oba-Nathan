"use client";
import Hero from "@/components/shared/hero";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const gtSuperDisplay = localFont({
  src: "../../fonts/GT-Super-Display-Regular-Trial.otf",
  variable: "--font-vogue",
  weight: "100 900",
});

const images: string[] = [
  "/images/image.webp",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
];

const ProductPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero id={id as string} />
      <div className="text-center my-10">
        <p className="text-lg uppercase font-normal">
          Spain based editorial wedding <br />
          photography
        </p>
      </div>
      <div className="my-10 md:my-32 text-center w-[90%] mx-auto flex flex-col gap-y-10 md:gap-y-32">
        <p
          className={`${gtSuperDisplay.className} text-[46px] leading-[50px] lg:text-[95px] xl:text-[104px] lg:leading-[90px] xl:leading-[110px]`}
        >
          Each project is a unique dialogue where we document the truth with an
          honest look. Looking for the beauty in things that we usually pass by
        </p>
        <div className="flex justify-center items-center">
          <Image
            src={images[currentIndex]}
            alt="image"
            width={900}
            height={1190}
            className="xl:aspect-[917/1190] lg:aspect-[1024/1328] w-full lg:w-full xl:w-[900px] lg:h-[1328px] xl:h-[1190px] transition-opacity duration-500"
          />
        </div>
      </div>
      <div className="flex justify-end mr-5 md:mr-10">
        <Link
          href="/events"
          className="uppercase text-sm md:text-base font-normal border-b border-white hover:border-black ease-out duration-200"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
