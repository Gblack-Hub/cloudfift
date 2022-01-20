import React from "react";
import LeftArrow from "../../SvgComponent/LeftArrow";
import RightArrow from "../../SvgComponent/RightArrow";
import { IRecommendedJobs } from "./../../../models/recommend-jobs";
import styles from "./index.module.css";
import JobLists from "./JobLists";

type TRecommendedJobs = {
  data: IRecommendedJobs[];
  title: string;
};

export default function Jobs({ data, title }: TRecommendedJobs) {
  let slideRef = React.useRef<any | null>(null);
  const [max, setMax] = React.useState(false);
  const [min, setMin] = React.useState(true);

  const handleNext = (direction: "left" | "right") => {
    if (direction === "left") {
      if (slideRef) {
        setMax(false);

        slideRef.current.scrollLeft =
          parseInt(slideRef.current.scrollLeft) - 450;
        if (slideRef.current.scrollLeft <= 0) {
          setMin(true);
          return;
        } else {
          setMin(false);
        }
      }
    } else {
      if (slideRef) {
        setMin(false);

        slideRef.current.scrollLeft =
          parseInt(slideRef.current.scrollLeft) + 450;
        if (slideRef.current.scrollLeft >= 1500) {
          setMax(true);
          console.log("true");
          return;
        } else {
          setMax(false);
        }
      }
    }
    console.log(slideRef.current.scrollLeft);
  };

  return (
    <section>
      <div
        className={`my-4 font-weight-bold`}
      >
        <span className={`${styles.title}`}>{title}</span>
      </div>
      <div
        ref={slideRef}
        className={`d-flex align-items-stretch my-5 overflow-auto`}
        style={{
          gap: "30px",
          scrollBehavior: "smooth",
        }}
      >
        {data.map((datum) => (
          <JobLists data={datum} />
        ))}
      </div>
      <div className="d-flex justify-content-end  mx-2">
        <div className="mx-4" onClick={() => handleNext("left")}>
          <LeftArrow color={min ? "#E5E5E5" : "#06942A"} />
        </div>
        <div onClick={() => handleNext("right")}>
          <RightArrow color={max ? "#E5E5E5" : "#06942A"} />
        </div>
      </div>
    </section>
  );
}
