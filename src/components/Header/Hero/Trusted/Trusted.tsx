import React from "react";
import { ITrusted } from "./../../../../models/trusted";
import styles from "./trusted.module.css";

export default function Trusted({ data }: { data: ITrusted[] }) {
  return (
    <section className="mt-1 mt-sm-1 mt-md-5 pt-lg-5 mt-xl-5">
      <div className={styles.title}>Trusted by:</div>
      <div className="d-flex align-items-center">
        {data.map(({ id, name: image }: ITrusted) => (
          <div key={id} className={`${!(id & 1) && "mx-4"}`}>
            <img src={image} className="img-fluid" alt={image} />
          </div>
        ))}
      </div>
    </section>
  );
}
