const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
    max: 65,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  img: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
  },
});
module.exports = mongoose.model("users", UserSchema);
