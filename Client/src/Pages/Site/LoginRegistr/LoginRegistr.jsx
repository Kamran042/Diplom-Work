import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./LoginRegistr.scss";
import { jwtDecode } from "jwt-decode";
import MainContext from "../../../Context/Context";
import { Form, Input, Button, Checkbox, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const LoginRegistr = () => {
  const { user, setUser } = useContext(MainContext);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // Состояние для хранения выбранного файла

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/diplomWork/users/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      console.log("Login response:", response.data);

      sessionStorage.setItem("token", response.data.token);

      navigate("/myaccount");
    } catch (error) {
      if (error.response) {
        console.error("Login error:", error.response.data);
        setError(error.response.data.error || "Login failed");
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.response.data.error || "Login failed",
        });
      } else {
        console.error("Login error:", error.message);
        setError("Login failed");
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Something went wrong. Please try again later.",
        });
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (registerPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("username", `${firstName} ${lastName}`);
    formData.append("email", registerEmail);
    formData.append("password", registerPassword);
    formData.append("img", avatar); // Добавляем файл аватарки в FormData

    try {
      const response = await axios.post(
        "http://localhost:8080/api/diplomWork/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Register response:", response.data);

      Swal.fire({
        icon: "success",
        title: "Registration successful",
        text: "You can now login with your credentials",
      });
    } catch (error) {
      setError(error.response.data || "Registration failed");
    }
  };

  const handleFileChange = (info) => {
    if (info.fileList.length > 0) {
      const file = info.fileList[0].originFileObj; // Получаем файл из объекта fileList
      console.log("Uploaded file:", file);
      setAvatar(file); // Сохраняем выбранный файл в состоянии
      message.success(`${file.name} file uploaded successfully`);
    }
  };

  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{
          backgroundImage: `url("https://htmldemo.net/pronia/pronia/assets/images/breadcrumb/bg/1-1-1919x388.jpg")`,
          backgroundColor: "#ffffff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">LOGIN & REGISTER PAGE</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Login | Register </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-register-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <form onSubmit={handleLogin}>
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input
                          type="checkbox"
                          id="remember_me"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4 pt-1 mt-md-0">
                      <div className="forgotten-password_info">
                        <a href="#"> Forgotten password?</a>
                      </div>
                    </div>
                    <div className="col-lg-12 pt-5">
                      <button
                        type="submit"
                        className="btn btn-custom-size lg-size btn-pronia-primary"
                      >
                        Login
                      </button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 pt-5 pt-lg-0">
              <form onSubmit={handleRegister}>
                <div className="login-form">
                  <h4 className="login-title">Register</h4>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <label>First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <Form.Item
                      name="img"
                      label="Avatar"
                      valuePropName="fileList"
                      getValueFromEvent={handleFileChange}
                    >
                      <Upload name="img" listType="picture">
                        <Button icon={<UploadOutlined />}>
                          Click to upload
                        </Button>
                      </Upload>
                    </Form.Item>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-custom-size lg-size btn-pronia-primary"
                      >
                        Register
                      </button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegistr;
