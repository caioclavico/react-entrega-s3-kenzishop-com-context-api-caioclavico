import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductsProvider } from "./providers/products";
import { CartProvider } from "./providers/cart";
import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider } from "./providers/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
