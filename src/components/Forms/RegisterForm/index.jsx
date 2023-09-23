import React, { forwardRef, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import { Button, Carousel, Form, Input, Select, Typography } from "antd";

export default function RegisterForm() {
  const ref = useRef();
  const [accountProducts, setAccountProducts] = useState([]);
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    id: "",
    phone: undefined,
    password: undefined,
    confirmPassword: undefined,
    business: {
      type: "bar",
      products: accountProducts,
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

  const findEmptyData = (data) => {
    const isEmpty = Object.values(data).some(
      (x) => x === undefined || x === ""
    );
    isEmpty ? setDisableNextStep(true) : setDisableNextStep(false);
  };

  useEffect(() => {
    findEmptyData(registrationData);
  }, [registrationData]);

  useEffect(() => {
    registrationData.business.products = accountProducts;
  }, [registrationData.business, accountProducts]);

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
            <ProductsPage ref={ref} handleProducts={setAccountProducts} />
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
  const { handleProducts } = props;
  const [allProducts, setAllProducts] = useState([]);
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
    setAllProducts([...allProducts, currentProduct]);
  };

  return (
    <>
      <div className={styles.addProductsContainer}>
        <Form className={styles.addProductsForm}>
          <Input
            required
            name="name"
            placeholder="Name"
            value={currentProduct.name}
            type="text"
            size="large"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.productInput}
          />
          <Input
            required
            name="desc"
            value={currentProduct.desc}
            placeholder="Product Description"
            type="text"
            size="large"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.productInput}
          />
          <Input
            required
            name="price"
            value={currentProduct.price}
            placeholder="Price"
            type="number"
            size="large"
            onChange={(e) =>
              handleChange(e.target.name, Number(e.target.value))
            }
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
        <div className={styles.productsListContainer}>
          {allProducts &&
            allProducts.map((product, index) => (
              <div className={styles.productRow}>
                <Typography className={styles.productItemLabel}>
                  {index + 1}.&nbsp;{product.name}
                </Typography>
                <Typography className={styles.productItemLabel}>
                  {product.desc.length > 0 ? product.desc : "No description"}
                </Typography>
                <Typography className={styles.productItemLabel}>
                  {product.price}&nbsp; LEK
                </Typography>
              </div>
            ))}
        </div>
      </div>
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
