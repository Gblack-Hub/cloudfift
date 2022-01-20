import React from "react";
import styles from "./index.module.css";

type THeader = {
  header: string;
};

export default function TestimonyHeader({ header }: THeader) {
  return (
    <section className="container my-5 text-center text-md-left">
      <h3 className={`${styles.header}`}>{header}</h3>
    </section>
  );
}
