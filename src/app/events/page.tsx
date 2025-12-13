import Hero from "@/components/shared/hero";
import Banner from "@/components/shared/banner";
import Header from "@/components/shared/Header";
import React from "react";
import EventDetails from "@/components/shared/event-details";

const EventPage = () => {
  return (
    <main className="lg:px-0 py-5">
      <Header />
      <div className="flex flex-col my-10">
        <Hero title="events" image="/images/image.webp" />
        <EventDetails />
        <Banner />
      </div>
    </main>
  );
};

export default EventPage;
