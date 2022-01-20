import React from "react";
import { Location, Search } from "../../../../utils/exports/assets";
import styles from "./herocontent.module.css";

export default function HeroContentInput() {
  return (
    <section className="position-relative">
      <div
        className={`position-relative ${styles.heroContentInputContainer} d-flex overflow-hidden mt-5 p-2`}
      >
        <aside className="flex-fill border-right">
          <input
            type="text"
            className={`${styles.heroContentInput} py-1 w-100 d-flex align-self-center`}
            placeholder="Enter keywords, skill, interest"
          />
        </aside>
        <aside className="ml-2">
          <div className="d-flex align-items-center">
            <div>
              <Location />
            </div>
            <input
              type="text"
              className={`${styles.heroContentInput} py-1 w-100 d-flex align-self-center`}
              placeholder="Location"
            />
          </div>
        </aside>
        <aside
          className={`${styles.buttonContainer} d-flex align-items-center px-3`}
        >
          <Search />
        </aside>
      </div>
    </section>
  );
}
