import React from "react";
import { IPopularCategory } from "./../../../models/popular-categories";
import styles from "./index.module.css";

type TPopularCategory = {
  data: IPopularCategory[];
  title: string;
};

export default function PopularCategoryList({ data, title }: TPopularCategory) {
  return (
    <>
      {data.map(({ icon, id, notification, title }: IPopularCategory) => (
        <div
          key={id}
          className={`col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4`}
        >
          <div className={`d-flex align-items-center justify-content-center`}>
            <div
              className={`${styles.wrapper} d-flex align-items-center justify-content-center flex-column `}
            >
              <div
                className={`${styles.imgBg} d-flex align-items-center justify-content-center`}
              >
                <img src={icon} alt={icon} className={styles.icon} />
              </div>
              <aside className="mt-2">
                <span className={`${styles.title}`}>{title}</span>
              </aside>
              <aside className="mt-2">
                <span className={styles.notification}>({notification})</span>
              </aside>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
