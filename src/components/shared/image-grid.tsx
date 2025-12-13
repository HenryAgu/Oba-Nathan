import Image from "next/image";

interface ImageGridProps {
  leftTopImages: { src: string; alt?: string }[];
  leftBottomImage: { src: string; alt?: string };
  rightImages: { src: string; alt?: string }[];
}

export default function ImageGrid({
  leftTopImages,
  leftBottomImage,
  rightImages,
}: ImageGridProps) {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="basis-[50%] flex flex-col h-full">
        <div className="flex">
          {leftTopImages.map((image, index) => (
            <div key={index} className="basis-[50%]">
              <Image
                src={image.src}
                alt={image.alt || "image"}
                width={500}
                height={250}
                className="w-full h-[285px] object-cover"
              />
            </div>
          ))}
        </div>

        <Image
          src={leftBottomImage.src}
          alt={leftBottomImage.alt || "image"}
          width={500}
          height={500}
          className="w-full h-[571px] object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="basis-[50%] flex flex-col h-full">
        {rightImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt || "image"}
            width={500}
            height={500}
            className="w-full h-[428px] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
