// src/App.js
import "./App.css";
import "./Animation.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import MainContext from "./Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  const router = createBrowserRouter(ROUTES);
  const [products, setProducts] = useState([]);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlistForDiplomWork")
      ? JSON.parse(localStorage.getItem("wishlistForDiplomWork"))
      : []
  );
  const [basket, setBasket] = useState(
    localStorage.getItem("basketForDiplomWork")
      ? JSON.parse(localStorage.getItem("basketForDiplomWork"))
      : []
  );

  const toggleMiniCart = (e) => {
    e.preventDefault();
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/diplomWork/cards"
      );
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
    AOS.init({ duration: 1000, once: true }); 
  }, [setProducts]);

  const contextData = {
    products,
    setProducts,
    fetchProducts,
    wishlist,
    setWishlist,
    basket,
    setBasket,
    isMiniCartOpen,
    setIsMiniCartOpen,
    toggleMiniCart,
    user,
    setUser,
  };

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
