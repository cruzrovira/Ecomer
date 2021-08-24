const { connect } = require("mongoose");
const { MONGODB_URL } = require("../config");

connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then((data) => {
    console.log("base de datos conectada :", data.connection.name);
  })
  .catch((error) => {
    console.error("error en la coneccion de la base der datos : ", error);
  });
