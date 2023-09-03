import React from "react";
import styles from "./styles.module.scss";

import logo from "../../../../../images/logo/Remus_Logo_H.svg";
import Navigation from "../Navigation";
import { Link } from "react-router-dom";
import { Typography } from "antd";

export default function HeaderContainer() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.register}>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className={styles.registerButton}>
            <Typography className={styles.registerLabel}>
              Register Business
            </Typography>
          </div>
        </Link>
      </div>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Site Logo" className={styles.appLogo} />
        </Link>
      </div>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
    </div>
  );
}
