import React from "react";
import Description from "./Description";
import Gallery from "./Gallery";
import { galleryData } from "../../utils/data/how-it-works-gallery";
import { howItWorksData } from "../../utils/data/how-it-works-description";

export default function index() {
  return (
    <section className="container mb-5">
      <div className="row px-3">
        <aside className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Gallery data={galleryData} />
        </aside>
        <aside className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <Description data={howItWorksData} title={"How it works"} />
        </aside>
      </div>
    </section>
  );
}
