import React from "react";
import { LogoWithTItle } from "../../../utils/exports/assets";
import styles from "./index.module.css";

export default function CompanyDescription() {
  return (
    <div>
      <aside>
        <img src={LogoWithTItle} className="img-fluid" alt={LogoWithTItle} />
      </aside>
      <aside className="mt-2">
        <span
          className={`${styles.description} text-center text-sm-center text-md-center text-lg-left text-xl-left`}
        >
          Getajobng provides a full online service for anyone looking for a new
          job. We're not a recruitment agency, we're a job site.
        </span>
      </aside>
    </div>
  );
}
