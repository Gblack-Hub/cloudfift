import React from "react";
import { IJobNetwork } from "./../../../models/job-network";
import styles from "./index.module.css";

type TJobNetwork = {
  data: IJobNetwork;
};

export default function JobNetworkList({ data: { content } }: TJobNetwork) {
  return (
    <aside className="mt-4">
      <span className={styles.content}>{content}</span>
    </aside>
  );
}
