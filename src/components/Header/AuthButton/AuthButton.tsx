import React from "react";
import styles from "./authbutton.module.css";
interface IButtonProp {
  name: string;
}

export default function AuthButton({ name }: IButtonProp) {
  return <button className={`${styles.button} py-1 px-4 mx-2`}>{name}</button>;
}
