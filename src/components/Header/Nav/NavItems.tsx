import React from "react";
import { NavLink } from "react-router-dom";
import { INavBar } from "./../../../models";
import styles from "./navitem.module.css";
import { useLocation } from "react-router";

type TNavBar = {
  navItems: INavBar[];
};

export default function NavItems({ navItems }: TNavBar) {
  const { pathname } = useLocation();

  return (
    <section className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row">
      {navItems?.map(({ id, name, path }: INavBar) => (
        <div key={id} className="px-2 my-2">
          <NavLink
            exact={true}
            to={path}
            activeClassName={styles.active}
            className={path === pathname ? styles.active : styles.navLink}
            // className={`text-decoration-none ${
            //   path === pathname ? "" : "text-dark"
            // } `}
          >
            {name}
          </NavLink>
        </div>
      ))}
    </section>
  );
}
