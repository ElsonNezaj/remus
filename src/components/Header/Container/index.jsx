import React from "react";
import styles from "./styles.module.scss";

import logo from "../../../images/logo/Remus_Logo_H.svg";
import Navigation from "../Navigation";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HeaderContainer() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.register}>
        <Link to="/register">
          <Button shape="round" size="large" className={styles.registerButton}>
            Register Business
          </Button>
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
