import React from 'react';
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:8080/api/diplomWork/admins/login', values);
        const { token, isSuperAdmin } = response.data;

        sessionStorage.setItem('token', token);
        if (isSuperAdmin) {
          sessionStorage.setItem('superAdminIsLogged', true);
        }
        sessionStorage.setItem('adminIsLogged', true);

        toast.success('Login successful!');
        navigate('/admin/products');
      } catch (error) {
        toast.error('Invalid email or password');
      }
    },
  });

  return (
    <>
      <div className="container">
        <h3 className="ms-5 mb-5">Admin Login</h3>
        <Form
          onFinish={formik.handleSubmit} 
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              name="email"
              onChange={formik.handleChange} 
              value={formik.values.email}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              name="password"
              onChange={formik.handleChange}  
              value={formik.values.password}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: 'black' }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />  
    </>
  );
}

export default AdminLogin;
