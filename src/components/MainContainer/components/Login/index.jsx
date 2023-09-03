import React from "react";
import styles from "./styles.module.scss";
import { Button, Form, Input, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.userIcon}>
        <UserOutlined />
      </div>
      <Form layout="vertical" className={styles.loginForm}>
        <Input
          name="id"
          placeholder="ID / NIPT"
          type="text"
          className={styles.loginInput}
        />
        <Input
          name="password"
          placeholder="Pasword"
          type="password"
          className={styles.loginInput}
        />
        <div className={styles.submitRow}>
          <Typography className={styles.forgotPassword}>
            Forgot Password?
          </Typography>
          <Button shape="round" type="submit" className={styles.loginButton}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}
