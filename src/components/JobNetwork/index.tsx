import React from "react";
import JobNetworkImage from "./JobNetworkImage";
import JobNetworkDescription from "./JobNetworkDescription";
import { jobNetworkData } from "../../utils/data/job-network";

export default function JobNetwork() {
  return (
    <>
      <section
        className="container mb-4 py-5"
        style={{ background: "rgba(6, 148, 42, 0.05)" }}
      >
        <div className="row align-items-center justify-content-center px-3 px-sm-0 px-md-0 px-lg-5 px-xl-5 px-xxl-5">
          <aside className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-5 ">
            <JobNetworkDescription
              data={jobNetworkData}
              title={"Over  1000+  jobs from top companies in our network"}
            />
          </aside>
          <aside className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <JobNetworkImage />
          </aside>
        </div>
      </section>
    </>
  );
}
