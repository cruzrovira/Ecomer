import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductProvider } from "./context/providers/productsContext";

import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./index.css";
import NavBar from "./components/ui/navBar";
import ProductForm from "./pages/product/productForm";
import HomePage from "./pages/home/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <NavBar />
        <div className="container height-100">
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={ProductForm} path="/product/new" exact />
          </Switch>
        </div>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
