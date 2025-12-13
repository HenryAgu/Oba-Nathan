import Image from 'next/image'
import React from 'react'

interface ThreeColumnImageGridProps {
  images: {
    src: string;
    alt?: string;
  }[];
}

const ThreeColumnImageGrid = ({
  images,
}: ThreeColumnImageGridProps) => {
  return (
    <div className="grid grid-cols-3">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt || "image"}
          width={500}
          height={500}
          className="w-full h-[571px] object-cover"
        />
      ))}
    </div>
  )
}

export default ThreeColumnImageGrid