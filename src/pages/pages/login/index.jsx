
import Header3 from "@/components/layout/header/Header3";
import Login from "@/components/pages/Login";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function LoginPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <main>
        <Header3 />
        <Login />

      </main>
    </>
  );
}
