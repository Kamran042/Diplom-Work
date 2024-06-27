import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./AddProduct.scss"; // Импорт файла стилей

const { TextArea } = Input;

// Валидационная схема для формы
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  price: Yup.number().required("Price is required").positive("Price must be positive"),
  category: Yup.string().required("Category is required"),
  desc: Yup.string().required("Description is required"),
});

const AddProducts = () => {
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);

  // Обработка отправки формы
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("count", 1);
    formData.append("category", values.category);
    formData.append("desc", values.desc);
    if (values.image1) formData.append("image1", values.image1);
    if (values.image2) formData.append("image2", values.image2);

    try {
      await axios.post("http://localhost:8080/api/diplomWork/cards", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Product added successfully");
      resetForm();
      setFileList1([]);
      setFileList2([]);
    } catch (error) {
      message.error("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          title: "",
          price: 0,
          count: 1,
          category: "",
          desc: "",
          image1: null,
          image2: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <Field name="title" id="title" as={Input} />
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Field name="price" id="price" as={Input} type="number" />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <Field as="select" name="category" id="category">
                <option value="">Select Category</option>
                <option value="Featured">Featured</option>
                <option value="Bestseller">Bestseller</option>
                <option value="Latest">Latest</option>
              </Field>
              <ErrorMessage name="category" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <Field name="desc" id="desc" as={TextArea} rows={4} />
              <ErrorMessage name="desc" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="image1">Image 1</label>
              <Upload
                listType="picture"
                fileList={fileList1}
                beforeUpload={() => false}
                onChange={(info) => {
                  setFileList1(info.fileList);
                  if (info.fileList.length > 0) {
                    setFieldValue("image1", info.fileList[0].originFileObj);
                  } else {
                    setFieldValue("image1", null);
                  }
                }}
                onRemove={() => {
                  setFieldValue("image1", null);
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Image 1</Button>
              </Upload>
              <ErrorMessage name="image1" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="image2">Image 2</label>
              <Upload
                listType="picture"
                fileList={fileList2}
                beforeUpload={() => false}
                onChange={(info) => {
                  setFileList2(info.fileList);
                  if (info.fileList.length > 0) {
                    setFieldValue("image2", info.fileList[0].originFileObj);
                  } else {
                    setFieldValue("image2", null);
                  }
                }}
                onRemove={() => {
                  setFieldValue("image2", null);
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Image 2</Button>
              </Upload>
              <ErrorMessage name="image2" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Button type="primary" htmlType="submit">
                Add Product
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProducts;
