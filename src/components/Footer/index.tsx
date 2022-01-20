import React from "react";
import FooterItems from "./FooterItems";
import { footerData } from "../../utils/data/footer";
import SocialButtons from "./SocialButtons";
import { socialButtonData } from "../../utils/data/social-button";
import CompanyDescription from "./CompanyDescription";

export default function Footer() {
  return (
    <footer className="container-fluid mt-5 py-5">
      <section className="row justify-content-center border-top pt-5 mt-5">
        <aside className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-center text-sm-center text-md-center text-lg-left text-xl-left">
          <CompanyDescription />
        </aside>

        <FooterItems data={footerData} />

        <aside className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-12">
          <SocialButtons data={socialButtonData} />
        </aside>
      </section>
    </footer>
  );
}
