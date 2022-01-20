import React from "react";
import { RightArrowSmall } from "../../../utils/exports/assets";
import { IJobNetwork } from "./../../../models/job-network";
import styles from "./index.module.css";
import JobNetworkList from "./JobNetworkList";

type TJobNetwork = {
  data: IJobNetwork[];
  title: string;
};

export default function JobNetworkDescription({ data, title }: TJobNetwork) {
  return (
    <section>
      <div>
        <aside className="text-center text-sm-center text-md-left text-lg-left text-xl-left">
          <span className={styles.title}>{title}</span>
        </aside>
        <aside>
          {data.map((datum: IJobNetwork) => (
            <section key={datum.id}>
              <JobNetworkList data={datum} />
            </section>
          ))}
        </aside>
        <aside className="mt-4">
          <button className={`${styles.button} px-3 py-1`}>
            <span className={`${styles.learnMore} text-capitalize mr-2`}>
              Learn more
            </span>
            <RightArrowSmall />
          </button>
        </aside>
      </div>
    </section>
  );
}
