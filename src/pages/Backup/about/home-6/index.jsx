import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner10 from "@/components/homes/banners/Banner10";
import BrandsThree from "@/components/homes/brands/BrandsThree";
import TrendingDestinations3 from "@/components/homes/destinations/TrendingDestinations3";
import Features5 from "@/components/homes/features/Features5";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero6 from "@/components/homes/heros/Hero6";
import SpacialOffer from "@/components/homes/others/SpacialOffer";
 
import TourTypes3 from "@/components/homes/tourTypes/TourTypes3";
import TourSlider3 from "@/components/homes/tours/TourSlider3";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header5 from "@/components/layout/header/Header5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function HomePage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header5 />
        <Hero6 />
        <FeaturesOne />
        <TrendingDestinations3 />
        <TourTypes3 />
        <TourSlider3 />
        <Features5 />
         
        <div className=" bg-light-1">
          <ArticlesOne />
        </div>
        <SpacialOffer />
        <BrandsThree />
        <Banner10 />
        <FooterFour />
      </main>
    </>
  );
}
