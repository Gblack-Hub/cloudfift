import React from "react";
import PopularCategoryList from "./PopularCategoryList";
import { popularCategoryData } from "../../utils/data/popular-categories";

export default function PopularCategory() {
  return (
    <section className="container my-5 py-5">
      <h3 className="font-weight-bold text-center">Popular Categories</h3>
      <div className="row justify-content-center text-center">
        <PopularCategoryList
          data={popularCategoryData}
          title={"Popular Category"}
        />
      </div>
    </section>
  );
}
