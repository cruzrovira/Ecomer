const { Router } = require("express");
const {
  getProduct,
  getProductId,
  saveProduct,
  deleteProductId,
  updateProductId,
} = require("../controllers/product.controller");

const productRoute = Router();

productRoute.get("/product", getProduct);
productRoute.get("/product/:id", getProductId);
productRoute.post("/product", saveProduct);
productRoute.put("/product/:id", updateProductId);
productRoute.delete("/product/:id", deleteProductId);

module.exports = { productRoute };
