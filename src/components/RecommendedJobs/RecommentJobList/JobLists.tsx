import React from "react";
import { Location } from "../../../utils/exports/assets";
import { IRecommendedJobs } from "./../../../models/recommend-jobs";
import styles from "./index.module.css";

type TRecommendedJobs = {
  data: IRecommendedJobs;
};

export default function JobLists({
  data: { id, apply, company, icon, location, position, status },
}: TRecommendedJobs) {
  return (
    <section
      key={id}
      className={`${styles.jobListContainer} position-relative px-3 pt-3 mx-1 my-2`}
    >
      <div className={`${styles.containerSize} position-relative`}>
        <div className="text-right">
          <span className={styles.status}>{status}</span>
        </div>

        <div className="d-flex flex-column mt-3 justify-content-center text-center h-50">
          <img
            src={icon}
            alt={company}
            className="d-flex align-self-center my-3"
          />
          <span className={styles.position}>{position}</span>
        </div>
        <div className="border-top py-3 mt-3">
          <div className="text-capitalize text-left">
            <span className={styles.position}>{company}</span>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div>
                <Location />
                <span className="mx-2">{location}</span>
              </div>
              <div>
                <button className={`${styles.apply} px-4 p-1`}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
