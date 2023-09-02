import React from "react";
import styles from "./styles.module.scss";

import logo from "../../../images/logo/Remus_Logo_H.svg";

export default function HeaderContainer() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.emptyDiv}></div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Site Logo" className={styles.appLogo} />
      </div>
      <div className={styles.navigationContainer}>Navigation</div>
    </div>
  );
}
