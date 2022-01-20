import React from "react";
import RecommendedJobList from "./RecommentJobList";
import { recommendedData } from "../../utils/data/recommended-jobs";

export default function index() {
  return (
    <section className="container my-5" style={{ height: "90vh" }}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
          <RecommendedJobList data={recommendedData} title="Recommended Jobs" />
        </div>
      </div>
    </section>
  );
}
