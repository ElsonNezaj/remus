import React, { forwardRef, useRef } from "react";

import styles from "./styles.module.scss";
import { Button, Carousel, Form, Input } from "antd";

export default function RegisterForm() {
  const ref = useRef();
  return (
    <div className={styles.registerContainer}>
      {ref && (
        <>
          <Carousel
            ref={ref}
            autoplay={false}
            dots
            dotPosition="bottom"
            className={styles.carousel}
          >
            <StepOne ref={ref} />
            <StepTwo />
          </Carousel>
        </>
      )}
    </div>
  );
}

const StepOne = forwardRef(function StepOne(props, ref) {
  return (
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
      <Button
        onClick={() => {
          ref.current?.next();
        }}
        type="round"
        className={styles.submitButton}
      >
        Next Step
      </Button>
    </Form>
  );
});

const StepTwo = forwardRef(function StepTwo() {
  return <p style={{ backgroundColor: "transparent" }}>Hello World</p>;
});
