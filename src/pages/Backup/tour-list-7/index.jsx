import Hero1 from "@/components/homes/heros/Hero1";
 
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Destinations from "@/components/tours/Destinations";
import TourList4 from "@/components/tours/TourList4";
import TourSlder from "@/components/tours/TourSlider";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function TourListPage7() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header1 />
        <Hero1 /> 
        <Destinations />
        <TourSlder /> 
        <TourList4 /> 
        <FooterOne />
      </main>
    </>
  );
}
