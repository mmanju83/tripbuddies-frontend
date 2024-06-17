import Invoice from "@/components/Invoice";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function InvoicePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Invoice />
      </main>
    </>
  );
}
