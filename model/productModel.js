const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  pro_name: {
    type: String,
    required: true,
  },
  pro_img: {
    type: String,
    required: true,
  },
  pro_price: {
    type: Number,
    required: true,
    min: 1,
  },
  pro_income: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("products", ProductSchema);
