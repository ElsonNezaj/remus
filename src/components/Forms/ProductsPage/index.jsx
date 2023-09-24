import React, { forwardRef, useState } from "react";
import styles from "./styles.module.scss";
import { Button, Form, Input, Typography } from "antd";

import Trash from "../../../assets/icons/trash.svg";

export const ProductsPage = forwardRef(function ProductsPage(props, ref) {
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

  const handleDeleteSingleItem = (index) => {};

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
              <div key={index} className={styles.productRow}>
                <Typography className={styles.productItemLabel}>
                  {index + 1}.&nbsp;
                  {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
                </Typography>
                <Typography className={styles.productItemLabel}>
                  {product.desc.length > 0
                    ? product.desc.charAt(0).toUpperCase() +
                      product.desc.slice(1)
                    : "No description"}
                </Typography>
                <Typography className={styles.productItemLabel}>
                  {product.price}&nbsp; LEK
                </Typography>
                <div className={styles.deleteContainer}>
                  <Button
                    danger
                    onClick={() => handleDeleteSingleItem(index)}
                    className={styles.deleteItemButton}
                  >
                    {/* <img src={Trash}></img> */}
                    Delete
                  </Button>
                </div>
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
