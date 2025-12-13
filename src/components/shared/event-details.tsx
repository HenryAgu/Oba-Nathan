import Image from "next/image";
import React from "react";
import EventWriteup from "./event-writeup";

const EventDetails = () => {
  return (
    <div className="container mx-auto">
      <EventWriteup
        image="/images/image.webp"
        content="Our event photography focuses on the emotions, connections, and
          spontaneous moments that make your occasion unique. We blend into the
          crowd, capturing real expressions and genuine joy so you get photos
          that feel alive. We pay attention to the details that often go
          unnoticed: the warm greetings, the shared laughter, the subtle
          reactions, and the atmosphere that defines your celebration. Whether
          it's a corporate gathering, a milestone party, or an intimate
          ceremony, we document the full story from start to finish. Our goal is
          to create a visual narrative that transports you back to the exact
          feeling of the moment timeless images that you can revisit and share
          for years to come."
      />
      <div className="flex">
        <div className="basis-[50%] flex flex-col h-full">
          <div className="flex">
            <div className="basis-[50%]">
              <Image
                src="/images/image.webp"
                alt="image"
                width={500}
                height={250}
                className="w-full h-[285px] object-cover"
              />
            </div>
            <div className="basis-[50%]">
              <Image
                src="/images/image.webp"
                alt="image"
                width={500}
                height={250}
                className="w-full h-[285px] object-cover"
              />
            </div>
          </div>
          <Image
            src="/images/image.webp"
            alt="image"
            width={500}
            height={500}
            className="w-full h-[571px] object-cover"
          />
        </div>
        <div className="basis-[50%] flex flex-col h-full">
          <Image
            src="/images/image.webp"
            alt="image"
            width={500}
            height={500}
            className="w-full h-[428px] object-cover"
          />
          <Image
            src="/images/image.webp"
            alt="image"
            width={500}
            height={500}
            className="w-full h-[428px] object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <Image
          src="/images/image.webp"
          alt="image"
          width={500}
          height={500}
          className="w-full h-[571px] object-cover"
        />
        <Image
          src="/images/image.webp"
          alt="image"
          width={500}
          height={500}
          className="w-full h-[571px] object-cover"
        />
        <Image
          src="/images/image.webp"
          alt="image"
          width={500}
          height={500}
          className="w-full h-[571px] object-cover"
        />
      </div>
    </div>
  );
};

export default EventDetails;
