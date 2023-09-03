import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationItem}>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Typography className={styles.navigationItem}>Contact</Typography>
        </Link>
      </div>
      <div className={styles.navigationItem}>
        <Link to="/about-remus" style={{ textDecoration: "none" }}>
          <Typography className={styles.navigationItem}>
            About
            <span className={styles.span}>REMUS</span>
          </Typography>
        </Link>
      </div>
    </div>
  );
}
