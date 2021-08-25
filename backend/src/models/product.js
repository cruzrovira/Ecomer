const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    desciption: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = model("product", ProductSchema);

module.exports = { Product };
