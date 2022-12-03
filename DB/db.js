const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://sila:sila123@cluster0.94hkpyw.mongodb.net/app?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("connected database");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = mongoose;
