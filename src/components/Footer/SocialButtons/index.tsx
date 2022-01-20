import React from "react";
import { ISocialButton } from "./../../../models/social-button";
import styles from "./index.module.css";

type TSocialButton = {
  data: ISocialButton[];
};

export default function SocialButtons({ data }: TSocialButton) {
  return (
    <>
      <div className={[styles.title, "text-center text-md-left mt-3"].join(' ')}>Social Media</div>
      <section className="d-flex justify-content-center mt-3">
        {data.map(({ id, name: SocialSvg }: ISocialButton) => (
          <div
          key={id}
          className={`${styles.bg} d-flex align-items-center justify-content-center mx-1`}
          >
            <SocialSvg />
          </div>
        ))}
      </section>
      </>
  );
}
