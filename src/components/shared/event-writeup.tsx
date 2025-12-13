import Image from "next/image";
import React from "react";
import { ComponentProps } from "../type";

const EventWriteup = ({image, content}:ComponentProps) => {
  return (
    <div className="flex">
      <div className="basis-[50%]">
        <Image
          src={image}
          alt="image"
          width={1178}
          height={557}
          className="w-full h-[600px] object-cover object-top"
        />
      </div>
      <div className="basis-[50%] p-16 pl-32">
        <p className="text-base leading-8">
{content}
        </p>
      </div>
    </div>
  );
};

export default EventWriteup;
