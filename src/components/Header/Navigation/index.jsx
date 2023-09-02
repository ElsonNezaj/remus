import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationItem}>
        <Typography className={styles.navigationItem}>Contact</Typography>
      </div>
      <div className={styles.navigationItem}>
        <Typography className={styles.navigationItem}>
          About
          <span className={styles.span}>REMUS</span>
        </Typography>
      </div>
    </div>
  );
}
