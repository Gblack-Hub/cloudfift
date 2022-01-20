import React from "react";
import { IGallery } from "./../../../models/how-it-works-gallery";
import styles from "./index.module.css";

type TGallery = {
  data: IGallery[];
};

export default function Gallery({ data }: TGallery) {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center
      flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row
      "
      >
        <div className="mr-0 mr-sm-0 mr-md-0 mr-lg-5 mr-xl-5">
          {data.map(({ id, name: image, title, company }: IGallery) => {
            if (id === data.length) return null;
            return (
              <div key={id} className={[`${!(id & 1) && "mt-5"}`, styles.galleryCard].join(' ')}>
                <div>
                  <img src={image} alt={image} className="img-fluid" />
                </div>
                <div className="px-2 py-4 bg-white text-center small font-weight-bold">
                  <span className={styles.title}>{title}</span>&nbsp;
                  <span className={`${styles.company} ${styles.company}`}>
                    {company}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <aside className="mt-5">
          {data.map(({ id, name: image, title, company }: IGallery) => {
            if (id === data.length) {
              return (
                <div key={id} className={["flex-row", styles.galleryCard].join(' ')}>
                  <div>
                    <img src={image} alt={image} className="img-fluid" />
                  </div>
                  <div className="px-2 py-4 text-center bg-white small font-weight-bold">
                    <span className={styles.title}>{title}</span>&nbsp;
                    <span className={`${styles.company} ${styles.company}`}>
                      {company}
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </aside>
      </section>
    </>
  );
}
