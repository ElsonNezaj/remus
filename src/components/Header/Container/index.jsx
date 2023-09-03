import React from "react";
import styles from "./styles.module.scss";

import logo from "../../../images/logo/Remus_Logo_H.svg";
import Navigation from "../Navigation";
import { Button } from "antd";

export default function HeaderContainer() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.register}>
        <Button>Register Business</Button>
      </div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Site Logo" className={styles.appLogo} />
      </div>
      <div className={styles.navigationContainer}>
        <Navigation />
      </div>
    </div>
  );
}
