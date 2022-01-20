// import React from "react";
import TestimonyContent from "./TestimonyContent";
import { testimonyData } from "../../utils/data/testimonies";
import TestimonyHeader from "./TestimonyHeader";

export default function Testimonies() {
  return (
    <section className="mb-5 pb-5">
      <TestimonyHeader header=" What are our customers saying " />
      <TestimonyContent data={testimonyData} />
    </section>
  );
}
