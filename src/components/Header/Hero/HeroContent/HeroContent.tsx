import React from "react";
import styles from "./herocontent.module.css";

export default function HeroContent() {
  return (
    <section>
      <h1 className={styles.header}>
          Find a <span className={styles.headerGreen}>job</span> easily
      </h1>
      <div>
        <span className={styles.subText}>
          With verified, up-to-date job listings directly from employer
          websites, we create a premium experience for job seekers, employers,
          and data seekers alike.
        </span>
      </div>
    </section>
  );
}
