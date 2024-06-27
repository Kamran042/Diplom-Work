import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "../Pages/Site/Home/Home";
import Shop from "../Pages/Site/Shop/Shop";
import About from "../Pages/Site/About/About";
import SiteRoot from "../Pages/Site/SiteRoot";
import Contact from "../Pages/Site/Contact/Contact";
import Basket from "../Pages/Site/Basket/Basket";
import Wishlist from "../Pages/Site/Wishlist/Wishlist";
import Chekout from "../Pages/Site/Chekout/Chekout";
import LoginRegistr from "../Pages/Site/LoginRegistr/LoginRegistr";
import MyAccount from "../Pages/Site/MyAccount/MyAccount";
import FAQ from "../Pages/Site/FAQ/FAQ";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Login from "../Pages/Admin/Login/Login";
import PrivateRoute from "../Routes/Private.Routes";
import Products from "../Pages/Admin/Products/Products";
import AddProducts from "../Pages/Admin/Add Product/AddProducts";
import AllSliders from "../Pages/Admin/AllSliders/AllSliders";
import SaleSlider from "../Pages/Admin/SaleSlider/SaleSlider";
import CommentsSlider from "../Pages/Admin/ComentsSlider/CommentsSlider";
import Blog from "../Pages/Admin/Blog/Blog";
import Detail from "../Pages/Site/Detail/Detail";
import ScrollToTop from "../Components/Site/ScrollToTop";
import Error from "../Pages/Site/Error/Error";
import Loading from "../Pages/Site/Loading/Loading";
import Users from "../Pages/Admin/Users/Users";

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000); // Время загрузки при смене страницы

  //   return () => clearTimeout(timer);
  // }, [location]);

  const getTitle = (path) => {
    switch (path) {
      case "/":
        return "Home Page";
      case "/shop":
        return "Shop Page";
      case "/about":
        return "About Page";
      case "/contact":
        return "Contact Page";
      case "/basket":
        return "Basket Page";
      case "/wishlist":
        return "Wishlist Page";
      case "/checkout":
        return "Checkout Page";
      case "/logreg":
        return "Login/Register Page";
      case "/myaccount":
        return "My Account Page";
      case "/faq":
        return "FAQ Page";
      case "/admin":
        return "Admin Login";
      case "/admin/users":
        return "Users";
      case "/admin/products":
        return "Products";
      case "/admin/sliders":
        return "Sliders";
      case "/admin/saleslider":
        return "Sale Slider";
      case "/admin/commentslider":
        return "Comments slider";
      case "/admin/add-product":
        return "Add Product";
      case "/admin/blog":
        return "Blog";
      default:
        return "Page Not Found";
    }
  };

  return (
    <>
      <Helmet>
        <title>{getTitle(location.pathname)}</title>
      </Helmet>
      {/* {loading && <Loading />} */}
      {children}
    </>
  );
};

const ROUTES = [
  {
    path: "/",
    element: (
      <ScrollToTop>
        <PageWrapper>
          <SiteRoot />
        </PageWrapper>
      </ScrollToTop>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "detail/:id", element: <Detail /> },
      { path: "basket", element: <Basket /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "checkout", element: <Chekout /> },
      { path: "logreg", element: <LoginRegistr /> },
      { path: "myaccount", element: <MyAccount /> },
      { path: "faq", element: <FAQ /> },
      { path: "*", element: <Error /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <ScrollToTop>
        <PageWrapper>
          <AdminRoot />
        </PageWrapper>
      </ScrollToTop>
    ),
    children: [
      { path: "/admin", element: <Login /> },
      {
        path: "products",
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: "sliders",
        element: (
          <PrivateRoute>
            <AllSliders />
          </PrivateRoute>
        ),
      },
      {
        path: "saleslider",
        element: (
          <PrivateRoute>
            <SaleSlider />
          </PrivateRoute>
        ),
      },
      {
        path: "commentslider",
        element: (
          <PrivateRoute>
            <CommentsSlider />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <Error /> },
    ],
  },
];

export default ROUTES;
