import React from "react";
import { Hero } from "../../../utils/exports/assets";
export default function HeroImage() {
  return (
    <section className=" d-none d-md-block d-lg-block d-xl-block mt-5 mt-md-0 mt-lg-0 mt-xl-0">
      <img src={Hero} className="img-fluid" alt="hero" />
    </section>
  );
}
