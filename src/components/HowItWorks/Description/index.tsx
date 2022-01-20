import React from "react";
import { IHowItWorks } from "./../../../models/how-it-works-description";
import styles from "./index.module.css";

type THowItWorks = {
  data: IHowItWorks[];
  title: string;
};

export default function Description({ data, title }: THowItWorks) {
  return (
    <section className="d-flex flex-column align-self-end mt-4">
      <aside className="text-center text-sm-center text-md-center text-lg-left text-xl-left">
        <span className={styles.header}>{title}</span>
      </aside>
      {data.map(({ content, id, title, icon }: IHowItWorks) => (
        <div className="mt-4 mt-sm-2 mt-md-5 mt-lg-5 mt-xl-5" key={id}>
          {icon && title ? (
            <aside>
              <div className="d-flex ">
                <img src={icon} alt={icon} className="img-fluid mr-3" />
                <div>
                  <span className={styles.title}>{title}</span>
                </div>
              </div>
              <div className={`${styles.content} mt-4`}>{content}</div>
            </aside>
          ) : (
            <aside>
              <div className={styles.content}>{content}</div>
            </aside>
          )}
        </div>
      ))}
    </section>
  );
}
