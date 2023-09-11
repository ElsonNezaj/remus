import React from "react";
import styles from "./styles.module.scss";
import VerticalLogo from "../../images/logo/Remus_Logo_V.svg";
import { Typography } from "antd";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <div className={styles.infoHeader}>
          <Typography className={styles.header}>Contact Info</Typography>
        </div>
      </div>
      <div className={styles.appLogo}>
        <img
          src={VerticalLogo}
          alt="App Logo"
          className={styles.verticalLogo}
        />
      </div>
    </div>
  );
}
