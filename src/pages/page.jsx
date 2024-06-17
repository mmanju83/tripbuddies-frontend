import React from "react";
import Firstpage from "./(homes)/home-1/page";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech ", 
};

export default function page() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Firstpage />
    </>
  );
}
