import React from "react";
import GetStartedContent from "./GetStartedContent";
import styles from "./index.module.css";

export default function GetStarted() {
  return (
    <section className={`${styles.container} container mb-4`}>
      <section className="row align-items-center text-center">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-none d-sm-none d-md-none d-lg-block d-xl-block "></div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center text-sm-center text-md-center text-lg-left text-xl-left my-4 my-sm-2 my-md-5 my-lg-5 my-xl-5">
          <GetStartedContent />
        </div>
      </section>
    </section>
  );
}
