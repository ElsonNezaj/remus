import React from "react";

import styles from "./styles.module.scss";
import { Form, Input } from "antd";

export default function RegisterForm() {
  return (
    <div className={styles.registerContainer}>
      <Form className={styles.registerForm}>
        <div className={styles.nameInputs}>
          <Input
            name="firstName"
            placeholder="First Name"
            type="text"
            size="large"
            className={styles.registerInput}
          />
          <Input
            name="lastName"
            placeholder=" Last Name"
            type="text"
            size="large"
            className={styles.registerInput}
          />
        </div>
        <Input
          name="id"
          placeholder="ID / NIPT"
          type="text"
          size="large"
          className={styles.registerInput}
        />
        <Input
          name="phone"
          placeholder="Phone Number"
          type="number"
          size="large"
          className={styles.registerInput}
        />
        <Input
          name="email"
          placeholder="E-mail"
          type="email"
          size="large"
          className={styles.registerInput}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          size="large"
          className={styles.registerInput}
        />
        <Input
          // name="password"
          placeholder="Re-enter Password"
          type="password"
          size="large"
          className={styles.registerInput}
        />
        <Input type="submit" className={styles.submitButton} />
      </Form>
    </div>
  );
}
