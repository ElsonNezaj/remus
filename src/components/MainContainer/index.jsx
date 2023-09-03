import React from "react";

import styles from "./styles.module.scss";
import HeaderContainer from "./components/Header/Container";
import Landing from "./components/Landing";
import { Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

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
          <Route path="/register" exact>
            <RegisterForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
