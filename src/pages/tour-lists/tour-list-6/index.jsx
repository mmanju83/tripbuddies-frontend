import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import Hero from "@/components/tours/Hero";
import TourList5 from "@/components/tours/TourList5";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Tour-list-6 || ViaTour - Travel & Tour Reactjs Template",
  description: "ViaTour - Travel & Tour Reactjs Template",
};

export default function TourListPage6() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
      <Header3 />
        <Hero />
        <TourList5 />
        <FooterFour />
      </main>
    </>
  );
}
