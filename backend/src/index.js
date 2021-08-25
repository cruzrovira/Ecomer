const express = require("express");
var cors = require("cors");
const { productRoute } = require("./routes/products.routes");
require("./config/mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", productRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("servidor cargado en ");
  console.log("http://localhost:" + PORT);
});
