import React from "react";

import styles from "./styles.module.scss";
import HeaderContainer from "../Header/Container";
import Landing from "../Landing";
import { Route, Switch } from "react-router-dom";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.landingHeader}>
        <HeaderContainer />
      </div>
      <div className={styles.landingBody}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
