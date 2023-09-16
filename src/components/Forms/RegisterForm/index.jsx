import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Button, Carousel, Form, Input, Select } from "antd";

export default function RegisterForm() {
  const ref = useRef();
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    phone: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  const [disableNextStep, setDisableNextStep] = useState(false);

  const handleChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const findEmptyData = (data) => {
    const isEmpty = Object.values(data).some(
      (x) => x === undefined || x === ""
    );
    isEmpty ? setDisableNextStep(true) : setDisableNextStep(false);
  };

  useEffect(() => {
    findEmptyData(registrationData);
  }, [registrationData]);

  return (
    <div className={styles.registerContainer}>
      {ref && (
        <>
          <Carousel
            ref={ref}
            autoplay={false}
            dots={false}
            className={styles.carousel}
          >
            <StepOne
              ref={ref}
              handleChange={handleChange}
              registrationData={registrationData}
              disableNextStep={disableNextStep}
            />
            <StepTwo ref={ref} />
          </Carousel>
        </>
      )}
    </div>
  );
}

const StepOne = forwardRef(function StepOne(props, ref) {
  const { handleChange, registrationData, disableNextStep } = props;
  return (
    <Form
      onSubmitCapture={() => {
        ref.current?.next();
      }}
      className={styles.registerForm}
    >
      <div className={styles.nameInputs}>
        <Input
          required
          name="firstName"
          placeholder={`First Name`}
          type="text"
          size="large"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.registerInput}
        />
        <Input
          required
          name="lastName"
          placeholder="Last Name"
          type="text"
          size="large"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.registerInput}
        />
      </div>
      <Input
        required
        name="id"
        placeholder="ID / NIPT"
        type="text"
        size="large"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={styles.registerInput}
      />
      <Input
        required
        name="phone"
        placeholder="Phone Number"
        type="number"
        size="large"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={styles.registerInput}
      />
      <Input
        required
        name="email"
        placeholder="E-mail"
        type="email"
        size="large"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={styles.registerInput}
      />
      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        size="large"
        minLength={8}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={styles.registerInput}
      />
      <Input
        required
        name="confirmPassword"
        placeholder="Re-enter Password"
        type="password"
        size="large"
        minLength={8}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={styles.registerInput}
      />
      <Input
        disabled={disableNextStep}
        type="submit"
        value="Next Step"
        className={styles.submitButton}
      />
    </Form>
  );
});

const StepTwo = forwardRef(function StepTwo(props, ref) {
  const businessOptions = [
    { label: "Bar / Restaurant", value: "bar" },
    { label: "Market", value: "market" },
  ];
  return (
    <Form className={styles.registerForm}>
      <Select
        defaultValue="bar"
        bordered
        options={businessOptions}
        size="large"
        className={styles.selectBusiness}
      />
      <div className={styles.buttonGroup}>
        <Button
          onClick={() => {
            ref.current?.prev();
          }}
          type="round"
          className={styles.submitButton}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            ref.current?.next();
          }}
          type="round"
          className={styles.submitButton}
        >
          Next Step
        </Button>
      </div>
    </Form>
  );
});
