import React from "react";
import { NavLink } from "react-router-dom";
import { IFooter } from "./../../../models/footer";
import styles from "./index.module.css";

type TFooterItems = {
  data: IFooter[];
};

export default function FooterItems({ data }: TFooterItems) {
  return (
    <>
      {data.map(({ id, items, title }: IFooter) => (
        <React.Fragment key={id}>
          <div
            className={`col-12 col-sm-12 ${
              id === data.length ? "col-md-12" : "col-md-6"
            } col-lg-2 col-xl-2 mt-3`}
          >
            <div className="pl-0 pl-sm-0 pl-md-0 pl-lg-0 pl-xl-5 pl-xxl-0 text-center text-sm-center text-md-center text-lg-left text-xl-left mt-3 mt-sm-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
              <aside className={`${styles.title} mb-4`}>{title}</aside>
              <aside>
                {items.map((item) => (
                  <div className="my-3">
                    <NavLink to="/">
                      <span className={styles.items}>{item}</span>
                    </NavLink>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
