import React from "react";
import { NextArrow, PrevArrow } from "../../../utils/exports/assets";
import { ITestimonies } from "./../../../models/testimonies";
import styles from "./index.module.css";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const renderContent = (
  { id, content, image, name, position }: ITestimonies,
  next: () => void,
  back: () => void
) => (
  <section
    key={id}
    className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
  >
    <div
      className="d-flex justify-content-center justify-sm-content-center align-items-center justify-md-content-start justify-lg-content-start justify-xl-content-start mb-2"
      style={{ flex: 1 }}
    >
      <img src={image} alt={image} className={`img-fluid ${styles.bgImage}`} />
    </div>
    <div className="" style={{ flex: 2 }}>
      <div className="d-flex flex-column flex-column-reverse flex-sm-column-reverse flex-md-column-reverse flex-lg-column flex-xl-column">
        {/* <aside className="d-flex align-self-end align-sm-self-center align-md-self-center align-lg-self-end align-xl-self-end align-xxl-self-end mb-2">
          <div>{renderArrows(next, back)}</div>
        </aside> */}
        <aside className="mt-4 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-4 mt-xxl-4 text-center text-sm-center text-md-left text-lg-left text-lg-left text-xl-left ml-0 ml-sm-0 ml-md-0 ml-lg-4 ml-xl-4 ml-xxl-4">
          <div className="mb-4 mb-sm-2 mb-md-2 mb-lg-2 mb-xl-2">
            <span className={`${styles.content}`}>{content}</span>
          </div>
          <div className="mt-4 ">
            <span className={styles.name}>{name}</span>
          </div>
          <div className="mt-2">
            <span className={styles.position}>{position}</span>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

const renderArrows = (next: () => void, back: () => void) => (
  <section className="d-flex mt-3 justify-content-center">
    <aside className="mr-3" onClick={back}>
      <PrevArrow />
    </aside>
    <aside>
      <NextArrow onClick={next} />
    </aside>
  </section>
);

type TTestimonies = {
  data: ITestimonies[];
};
export default function TestimonyContent({ data }: TTestimonies) {
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplaySpeed: 5000,
    className: "slides",
    arrows: false,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: true,
  };

  const sliderRef = React.useRef<any>();

  const next = () => {
    if (sliderRef) sliderRef?.current?.slickNext();
  };

  const back = () => {
    if (sliderRef) sliderRef?.current?.slickPrev();
  };

  return (
    <section className="container mt-5 position-relative">
      <div className="d-md-flex d-none justify-content-end">{renderArrows(next, back)}</div>
      <div className="d-none d-sm-none d-md-none d-lg-none d-xl-flex d-xxl-flex justify-content-end mb-1">
        <div>{renderArrows(next, back)}</div>
      </div>
      <Slick
        {...settings}
        ref={sliderRef}
        className={`${styles.overflowStatus} position-relative`}
      >
        {data.map((datum: ITestimonies) => renderContent(datum, next, back))}
      </Slick>
      <div
        className={`${styles.pos} position-absolute w-100 d-md-none d-flex justify-content-center mb-1 `}
      >
        <div>{renderArrows(next, back)}</div>
      </div>
    </section>
  );
}
