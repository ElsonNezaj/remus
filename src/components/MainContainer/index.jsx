import React from "react";

import styles from "./styles.module.scss";
import HeaderContainer from "../Header/Container";
import Landing from "../Landing";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.landingHeader}>
        <HeaderContainer />
      </div>
      <div className={styles.landingBody}>
        <Landing />
      </div>
    </div>
  );
}
