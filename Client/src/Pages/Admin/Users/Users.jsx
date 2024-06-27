// src/Pages/Site/Users/Users.jsx
import React, { useEffect, useState } from "react";
import { Table, Space, Button, message, Input } from "antd";
import axios from "axios";
import "./Users.scss";

const { Search } = Input;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchUsername, setSearchUsername] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/diplomWork/users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        message.error("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (value) => {
    setSearchUsername(value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchUsername.toLowerCase())
  );

  const columns = [
    {
      title: "№",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          src={`http://localhost:8080/${img}`}
          alt="User"
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: "Registration Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) =>
        new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
    },
  
  ];

  return (
    <div className="users-container">
      <Search
        placeholder="Search by username"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default Users;
