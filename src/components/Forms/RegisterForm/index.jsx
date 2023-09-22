import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Button, Carousel, Form, Input, Select, Typography } from "antd";

export default function RegisterForm() {
  const ref = useRef();
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    phone: undefined,
    password: undefined,
    confirmPassword: undefined,
    business: {
      type: "bar",
      products: [],
    },
  });
  const [disableNextStep, setDisableNextStep] = useState(false);

  const handleChange = (name, value) => {
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleBusinessChange = (type) => {
    setRegistrationData({
      ...registrationData,
      business: {
        type: type,
        products: [],
      },
    });
  };

  const handleProducts = (prods) => {
    setRegistrationData({
      ...registrationData,
      business: {
        type: registrationData.business.type,
        products: prods,
      },
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

  console.log(registrationData);

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
            <StepTwo ref={ref} handleBusinessChange={handleBusinessChange} />
            <ProductsPage
              ref={ref}
              handleProducts={handleProducts}
              products={registrationData.business.products}
            />
          </Carousel>
        </>
      )}
    </div>
  );
}

const StepOne = forwardRef(function StepOne(props, ref) {
  const { handleChange, disableNextStep } = props;
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

  const { handleBusinessChange } = props;

  return (
    <Form className={styles.registerForm}>
      <Select
        defaultValue="bar"
        bordered
        options={businessOptions}
        size="large"
        onChange={(e) => handleBusinessChange(e)}
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

const ProductsPage = forwardRef(function ProductsPage(props, ref) {
  const { handleProducts, products } = props;
  const allProducts = [];
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    desc: "",
    price: undefined,
  });

  const handleChange = (name, value) => {
    setCurrentProduct({
      ...currentProduct,
      [name]: value,
    });
  };

  const handleAddButton = () => {
    if (currentProduct.name.length > 0 && currentProduct.price) {
      allProducts.push(currentProduct);
      setCurrentProduct({
        name: "",
        desc: "",
        price: undefined,
      });
    }
  };

  return (
    <>
      <div className={styles.addProductsContainer}>
        <Form className={styles.addProductsForm}>
          <Input
            required
            name="name"
            placeholder="Name"
            type="text"
            size="large"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.productInput}
          />
          <Input
            required
            name="desc"
            placeholder="Product Description"
            type="text"
            size="large"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.productInput}
          />
          <Input
            required
            name="price"
            placeholder="Price"
            type="number"
            size="large"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.productInput}
          />
          <Button
            onClick={() => handleAddButton()}
            type="round"
            className={styles.submitButton}
          >
            Add Product
          </Button>
        </Form>
      </div>
      {products &&
        products.map((product) => (
          <div className={styles.productRow}>
            <Typography>{product.name}</Typography>
            <Typography>{product.desc}</Typography>
            <Typography>{product.price}</Typography>
          </div>
        ))}
      <div className={styles.buttonGroupFinal}>
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
          type="round"
          onClick={() => handleProducts(allProducts)}
          className={styles.submitButton}
        >
          Finish
        </Button>
      </div>
    </>
  );
});
