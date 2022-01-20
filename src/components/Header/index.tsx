import React from "react";
import NavItems from "./Nav/NavItems";
import { navData } from "../../utils/data/navbar";
import AuthButtons from "./AuthButton";
import { Cancel, Logo, LogoImage } from "../../utils/exports/assets";
import styles from "./index.module.css";
import Hero from "./Hero";
import AuthButton from "./AuthButton/AuthButton";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  // const [height, setHeight] = React.useState<number>(0);

  // const handleScroll = (): void => {
  //   setHeight(Math.floor(window.document.body.clientHeight / 1000));
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <section
      className={`${styles.bgImage} ${styles.bg} h-100 position-relative`}
    >
      <section className="container-fluid pt-3">
        <div
          className="position-fixed mb-3"
          style={{
            width: "100%",
            left: 0,
            top: 0,
            zIndex: 30,
            background: "rgba(6, 148, 42, 0.7)",
          }}
        >
          <aside className="d-flex align-items-center justify-content-between px-3">
            <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none text-left d-flex align-self-center">
              <Logo />
            </div>
            <div
              className="d-block d-sm-block d-md-none d-lg-none d-xl-none"
              onClick={() => setOpen(!open)}
              style={{
                transition: "5s ease-in",
                transitionDelay: "4s",
              }}
            >
              {open ? <Cancel /> : <span className={styles.hamburger}>&#9776;</span>}
            </div>
          </aside>

          <div>
            {open && (
              <section
                className="position-absolute d-md-none py-2"
                style={{
                  background: " rgba(6, 148, 42, 0.9)",
                  zIndex: 100,
                  width: "100%",
                  left: 0,
                  top: "55px",
                  transition: "1s",
                  transform: `${
                    open ? "translateX(0px)" : "translateX(-1000px)"
                  }`,
                }}
              >
                <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
                  <NavItems navItems={navData} />
                </div>
                <div className="text-left my-3">
                  <AuthButton name="Sign Up" />
                  <AuthButton name="Login" />
                </div>
              </section>
            )}
          </div>
        </div>
        <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none mb-5"></div>
        <section className="d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex flex-lg-row flex-xl-row justify-content-around align-items-center flex-fill mb-4 mb-sm-4 mb-md-4 mb-lg-0 mb-xl-0">
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
              <img src={LogoImage} className="img-fluid" alt="logo" />
            </div>
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
              <NavItems navItems={navData} />
            </div>
          </div>
          <div className="flex-fill">
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
              <AuthButtons />
            </div>
          </div>
        </section>
      </section>

      <section>
        <Hero />
      </section>
    </section>
  );
}
