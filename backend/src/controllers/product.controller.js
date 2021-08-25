const { Product } = require("../models/product");

const getProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProductId = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((productFind) => {
      if (productFind) return res.json(productFind);
      return res.status(404).end();
    })
    .catch((error) => {
      console.error("error al realizar la busqueda", error);
    });
};

const saveProduct = (req, res) => {
  const { body } = req;
  const { nombre, price, desciption, quantity, images } = body;

  const newProduct = new Product({
    nombre,
    price,
    desciption,
    quantity,
    images,
  });

  newProduct
    .save()
    .then((saveProduct) => {
      res.json(saveProduct);
    })
    .catch((error) => {
      res.json(error);
      console.error("error al crear el producto", error.name);
    });
};

const updateProductId = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { nombre, price, desciption, quantity, images } = body;

  const newProductInfo = { nombre, price, desciption, quantity, images };

  Product.findByIdAndUpdate(id, newProductInfo, { new: true })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("error al actualizar el producto", error);
    });
};
const deleteProductId = (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      console.error("Error al eliminar un producto", error);
    });
};

module.exports = {
  getProduct,
  getProductId,
  saveProduct,
  updateProductId,
  deleteProductId,
};
