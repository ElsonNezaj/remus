import React from "react";
import styles from "./styles.module.scss";
import { Form, Input } from "antd";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Form layout="vertical">
        <Input name="id" placeholder="ID/NIPT" type="text" />
        <Input name="password" placeholder="Pasword" type="password" />
      </Form>
    </div>
  );
}
