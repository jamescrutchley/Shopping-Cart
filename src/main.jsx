import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router.jsx";
// import './styles/globalStyles.css'
import "./styles/Root.module.css";
import CartContext from "./context/CartContext.js";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </CartProvider>
);
