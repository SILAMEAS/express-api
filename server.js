const express = require("express");
const userRouter = require("./routes/User");
const productRouter = require("./routes/Product");
const cors = require("cors");

require("dotenv").config();
// import DB
require("./DB/db");
// start using express
const app = express();
app.use(cors());
app.listen(process.env.PORT || 3001);
console.log("port" + process.env.PORT);
//middle ware
app.use(express.json());
//routes
app.use("/user", userRouter);
app.use("/product", productRouter);
//Connected DB
