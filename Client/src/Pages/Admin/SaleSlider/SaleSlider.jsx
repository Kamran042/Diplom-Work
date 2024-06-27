import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Upload, Button, message, Table, Popconfirm, Modal, Input } from "antd";
import { UploadOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

const SaleSlider = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [sliders, setSliders] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSlider, setCurrentSlider] = useState(null);
  const [modalFormValues, setModalFormValues] = useState({
    title: "",
    salepercentage: "",
    shortDesc: "",
    innerImage: null, // Добавляем поле для изображения
  });
  const [modalImagePreview, setModalImagePreview] = useState(null); // Добавляем состояние для предпросмотра изображения

  useEffect(() => {
    fetchSliders(); 
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/diplomWork/salesliders");
      setSliders(response.data); 
      console.log("Sliders fetched:", response.data);
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  const initialValues = {
    innerImage: null,
    title: "",
    salepercentage: "",
    shortDesc: "",
  };

  const validationSchema = Yup.object({
    innerImage: Yup.mixed().required("Required"),
    title: Yup.string(),
    salepercentage: Yup.string().required("Required"),
    shortDesc: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append("innerImage", values.innerImage);
    formData.append("title", values.title);
    formData.append("salepercentage", values.salepercentage);
    formData.append("shortDesc", values.shortDesc);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/diplomWork/salesliders",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      message.success("Product added successfully");
      resetForm();
      setImagePreview(null);
      fetchSliders(); // После успешного добавления обновляем список слайдеров
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to add product");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteSlider = async (sliderId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/diplomWork/salesliders/${sliderId}`);
      console.log("Slider deleted:", response.data);
      message.success("Slider deleted successfully");
      fetchSliders();
    } catch (error) {
      console.error("Error deleting slider:", error);
      message.error("Failed to delete slider");
    }
  };

  const handleEditSlider = (slider) => {
    setCurrentSlider(slider);
    setModalFormValues({
      title: slider.title,
      salepercentage: slider.salepercentage,
      shortDesc: slider.shortDesc,
      innerImage: null, // Изначально изображение пустое, пока пользователь не загрузит новое
    });
    setModalImagePreview(`http://localhost:8080/${slider.innerImage}`); // Устанавливаем предпросмотр текущего изображения
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setCurrentSlider(null);
    setModalVisible(false);
    setModalImagePreview(null); // Сбрасываем предпросмотр изображения при закрытии модального окна
  };

  const handleModalOk = async () => {
    const formData = new FormData();
    formData.append("title", modalFormValues.title);
    formData.append("salepercentage", modalFormValues.salepercentage);
    formData.append("shortDesc", modalFormValues.shortDesc);
    if (modalFormValues.innerImage) {
      formData.append("innerImage", modalFormValues.innerImage); // Добавляем изображение, если оно было выбрано
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/diplomWork/salesliders/${currentSlider._id}`,
        formData
      );
      console.log("Slider updated:", response.data);
      message.success("Slider updated successfully");
      fetchSliders(); // Обновляем список слайдеров после успешного редактирования
      setModalVisible(false);
      setModalImagePreview(null); // Сбрасываем предпросмотр изображения после успешного обновления
    } catch (error) {
      console.error("Error updating slider:", error);
      message.error("Failed to update slider");
    }
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setModalFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleModalFileChange = (file) => {
    setModalFormValues((prevValues) => ({
      ...prevValues,
      innerImage: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setModalImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'innerImage',
      key: 'innerImage',
      render: innerImage => <img src={`http://localhost:8080/${innerImage}`} alt="Slider" style={{ width: '100px' }} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Sale Percentage',
      dataIndex: 'salepercentage',
      key: 'salepercentage',
    },
    {
      title: 'Short Description',
      dataIndex: 'shortDesc',
      key: 'shortDesc',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Popconfirm
            title="Are you sure delete this slider?"
            onConfirm={() => handleDeleteSlider(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon={<DeleteOutlined />} size="small" style={{ marginRight: '8px' }} />
          </Popconfirm>
          <Button type="primary" icon={<EditOutlined />} size="small" onClick={() => handleEditSlider(record)} />
        </div>
      ),
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Sale Slider</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="form-group mb-3">
              <label htmlFor="innerImage">Inner Image</label>
              <div className="d-flex align-items-center">
                <Upload
                  name="innerImage"
                  beforeUpload={(file) => {
                    setFieldValue("innerImage", file);
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setImagePreview(reader.result);
                    };
                    reader.readAsDataURL(file);
                    return false;
                  }}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: "100px", marginLeft: "20px" }}
                  />
                )}
              </div>
              <ErrorMessage
                name="innerImage"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                type="text"
                className="form-control"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="salepercentage">Sale Percentage</label>
              <Field
                id="salepercentage"
                name="salepercentage"
                type="number"
                className="form-control"
              />
              <ErrorMessage
                name="salepercentage"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="shortDesc">Short Description</label>
              <Field
                id="shortDesc"
                name="shortDesc"
                as="textarea"
                className="form-control"
              />
              <ErrorMessage
                name="shortDesc"
                component="div"
                className="text-danger"
              />
            </div>

            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>

      <div className="mt-5">
        <h2>Sale Sliders</h2>
        <Table columns={columns} dataSource={sliders} rowKey="_id" />

        {/* Modal for editing slider */}
        <Modal
          title="Edit Slider"
          visible={modalVisible}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
        >
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              name="title"
              value={modalFormValues.title}
              onChange={handleModalChange}
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="salepercentage">Sale Percentage</label>
            <Input
              id="salepercentage"
              name="salepercentage"
              type="number"
              value={modalFormValues.salepercentage}
              onChange={handleModalChange}
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="shortDesc">Short Description</label>
            <Input
              id="shortDesc"
              name="shortDesc"
              value={modalFormValues.shortDesc}
              onChange={handleModalChange}
              className="form-control"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="innerImage">Inner Image</label>
            <Upload
              name="innerImage"
              beforeUpload={(file) => {
                handleModalFileChange(file);
                return false;
              }}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            {modalImagePreview && (
              <img
                src={modalImagePreview}
                alt="Preview"
                style={{ maxWidth: "100px", marginTop: "20px" }}
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SaleSlider;
