const express = require("express");
var cors = require("cors");
require("./config/mongoose");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("servidor cargado en ");
  console.log("http://localhost:" + PORT);
});
