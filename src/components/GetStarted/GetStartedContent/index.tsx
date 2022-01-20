import React from "react";
import styles from "./index.module.css";

export default function GetStartedContent() {
  return (
    <>
      <aside>
        <span className={styles.title}>Get a Job you actually like</span>
      </aside>
      <aside className="my-2">
        <span className={styles.subTitle}>
          Create an account and start applying
        </span>
      </aside>
      <aside className="my-2 my-sm-1 my-md-4 my-lg-4 my-4">
        <button className={`${styles.getStartedBtn} px-5 py-2`}>
          <span>Get Started</span>
        </button>
      </aside>
    </>
  );
}
