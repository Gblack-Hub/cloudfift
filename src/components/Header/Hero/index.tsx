import React from "react";
import HeroImage from "./HeroImage";
import HeroContentGroup from "./HeroContent/";

export default function Hero() {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <HeroContentGroup />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 h-100">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
