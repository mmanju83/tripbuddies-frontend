import AddTour from "@/components/dasboard/AddTour";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function DBAddTourPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <AddTour />
      </main>
    </>
  );
}
