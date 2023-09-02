import React from "react";
import styles from "./styles.module.scss";
import Login from "../Login";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Login />
    </div>
  );
}
