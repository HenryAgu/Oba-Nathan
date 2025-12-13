import React from "react";
import EventWriteup from "./event-writeup";
import ImageGrid from "./image-grid";
import ThreeColumnImageGrid from "./three-column-image-grid";

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
      <ImageGrid
        leftTopImages={[
          { src: "/images/image.webp" },
          { src: "/images/image.webp" },
        ]}
        leftBottomImage={{ src: "/images/image.webp" }}
        rightImages={[
          { src: "/images/image.webp" },
          { src: "/images/image.webp" },
        ]}
      />
      <ThreeColumnImageGrid
        images={[
          { src: "/images/image.webp" },
          { src: "/images/image.webp" },
          { src: "/images/image.webp" },
        ]}
      />
    </div>
  );
};

export default EventDetails;
