import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Upload,
  Select,
} from "antd";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import toast, { Toaster } from "react-hot-toast";
import MainContext from "../../../Context/Context";
import "./Products.scss";

const Products = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { products, fetchProducts } = useContext(MainContext);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" - по возрастанию, "desc" - по убыванию
  const [sortField, setSortField] = useState(null); // null - сортировка не применена, "title", "price"
  const [expandedRowKeys, setExpandedRowKeys] = useState([]); // Стейт для хранения ключей развернутых строк
  const [categories, setCategories] = useState([]); // Стейт для хранения уникальных категорий

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories.sort());
  }, [products]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/diplomWork/cards/${id}`);
      toast.success("Product deleted");
      fetchProducts();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const showEditModal = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setFileList1(
      product.image1 ? [{ url: `http://localhost:8080/${product.image1}` }] : []
    );
    setFileList2(
      product.image2 ? [{ url: `http://localhost:8080/${product.image2}` }] : []
    );
    setIsModalVisible(true);
  };

  const handleEdit = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      if (fileList1.length > 0 && fileList1[0].originFileObj) {
        formData.append("image1", fileList1[0].originFileObj);
      }

      if (fileList2.length > 0 && fileList2[0].originFileObj) {
        formData.append("image2", fileList2[0].originFileObj);
      }

      await axios.put(
        `http://localhost:8080/api/diplomWork/cards/${editingProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Product updated");
      setIsModalVisible(false);
      fetchProducts();
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setFileList1([]);
    setFileList2([]);
  };

  const handleFileChange1 = ({ fileList }) => setFileList1(fileList);
  const handleFileChange2 = ({ fileList }) => setFileList2(fileList);

  const handleSort = (field) => {
    if (sortField === field) {
      // Переключение порядка сортировки
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // Установка нового поля сортировки
      setSortField(field);
      setSortOrder("asc"); // По умолчанию сортируем по возрастанию
    }
  };

  // Функция для фильтрации и сортировки продуктов
  const filteredAndSortedProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === "title") {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        return sortOrder === "asc"
          ? titleA > titleB
            ? 1
            : -1
          : titleA < titleB
          ? 1
          : -1;
      } else if (sortField === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
      return 0; // Возвращаем ноль для сохранения порядка, если сортировка не применена
    });

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
      width: 50,
      align: "center",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: true,
      ellipsis: true,
    },
    {
      title: "Image 1",
      dataIndex: "image1",
      key: "image1",
      render: (text) => (
        <img
          src={`http://localhost:8080/${text}`}
          alt="image1"
          style={{ width: 50 }}
        />
      ),
      width: 100,
    },
    {
      title: "Image 2",
      dataIndex: "image2",
      key: "image2",
      render: (text) => (
        <img
          src={`http://localhost:8080/${text}`}
          alt="image2"
          style={{ width: 50 }}
        />
      ),
      width: 100,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: true,
      align: "right",
      render: (text) => `$${text}`,
      width: 100,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ellipsis: true,
      width: 100,
      filters: categories.map((category) => ({
        text: category,
        value: category,
      })),
      onFilter: (value, record) => record.category === value,
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      ellipsis: true,
      render: (text) => text.substring(0, 50),
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      width: 100,
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => showEditModal(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => deleteProduct(record._id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between px-5">
        <div className="search-input-container">
          <Input
            placeholder="Search by product name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
          />
        </div>
        <div className="product-count-container">
          <p>Total Products: {products.length}</p>
        </div>
      </div>
      <Table
        dataSource={filteredAndSortedProducts}
        columns={columns}
        rowKey="_id"
        expandable={{
          expandedRowRender: (record) => (
            <div style={{ whiteSpace: "pre-wrap" }}>
              <p>
                <strong>Title:</strong> {record.title}
              </p>
              <p>
                <strong>Category:</strong> {record.category}
              </p>
              <p>
                <strong>Description:</strong> {record.desc}
              </p>
            </div>
          ),
          expandRowByClick: true,
          expandedRowKeys: expandedRowKeys,
          onExpand: (expanded, record) => {
            const keys = [...expandedRowKeys];
            if (expanded) {
              keys.push(record._id);
            } else {
              const index = keys.indexOf(record._id);
              if (index !== -1) {
                keys.splice(index, 1);
              }
            }
            setExpandedRowKeys(keys);
          },
        }}
        onChange={(pagination, filters, sorter) => {
          if (sorter.order) {
            handleSort(sorter.field);
          } else {
            setSortField(null);
            setSortOrder("asc");
          }
        }}
      />
      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleEdit}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="image1" label="Image 1">
            <Upload
              listType="picture"
              beforeUpload={() => false}
              fileList={fileList1}
              onChange={handleFileChange1}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="image2" label="Image 2">
            <Upload
              listType="picture"
              beforeUpload={() => false}
              fileList={fileList2}
              onChange={handleFileChange2}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true }]}
          >
            <Select>
              {categories.map((category) => (
                <Select.Option key={category} value={category}>
                  {category}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="desc"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Products;
