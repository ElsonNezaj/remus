import React from "react";

import styles from "./styles.module.scss";
import { Typography } from "antd";
import HeaderContainer from "../Header/Container";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.landingHeader}>
        <HeaderContainer />
      </div>
      <div className={styles.landingBody}>
        <Typography>Landing Body</Typography>
      </div>
    </div>
  );
}
