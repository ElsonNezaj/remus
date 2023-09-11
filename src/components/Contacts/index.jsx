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
        <div className={styles.body}>
          <div className={styles.contactBody}>
            <Typography className={styles.bodyHeader}>Contact : </Typography>
            <div className={styles.labelContainer}>
              <Typography className={styles.label}>
                +355 069 345 6789{" "}
              </Typography>
              <Typography className={styles.label}>
                +355 067 444 6666{" "}
              </Typography>
              <Typography className={styles.label}>remus@info.com </Typography>
            </div>
          </div>
          <div className={styles.contactBody}>
            <Typography className={styles.bodyHeader}>Address : </Typography>
            <div className={styles.labelContainer}>
              <Typography className={styles.label}>
                Plaza Tirana, Sheshi Skender Beu, Tirana 1001, Albania{" "}
              </Typography>
              <Typography className={styles.label}>
                Shëtitorja Lasgush Poradeci, Tiranë, Albania{" "}
              </Typography>
            </div>
          </div>
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
