import React from "react";

const ImageCarousel = () => {
  const images = [
    { id: 1, src: "/images/image.webp", rotate: "-10deg" },
    { id: 2, src: "/images/image.webp", rotate: "15deg" },
    { id: 3, src: "/images/image.webp", rotate: "-5deg" },
    { id: 4, src: "/images/image.webp", rotate: "12deg" },
    { id: 5, src: "/images/image.webp", rotate: "-15deg" },
    { id: 6, src: "/images/image.webp", rotate: "-5deg" },
  ];
  return (
    <div className="flex justify-center items-center pt-24 pb-4 xl:pt-24 md:py-24 xl:py-24 overflow-x-hidden w-full xl:pl-[20px]">
      {images.map((image) => (
        <div
          key={image.id}
          className="transform object-cover hover:rotate-0 aspect-[220/280] xl:aspect-[330/400] w-[130px] xl:w-[330px] h-[200px] xl:h-[400px] bg-cover bg-center shadow-md grayscale hover:grayscale-0 transition duration-300 ease-in-out -ml-[20px]"
          style={{
            backgroundImage: `url(${image.src})`,
            transform: `rotate(${image.rotate})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageCarousel;
