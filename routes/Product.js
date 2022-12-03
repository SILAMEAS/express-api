const express = require("express");
// import model product
const productModel = require("../model/productModel.js");
const router = express.Router();
// all product
router.get("/", async (req, res) => {
  try {
    const allpro = await productModel.find();
    res.json(allpro);
  } catch (e) {
    console.log(e.message);
  }
});
// get one

router.get("/:id", async (req, res) => {
  try {
    const allpro = await productModel.findById(req.params.id);
    res.json(allpro);
  } catch (e) {
    console.log(e.message);
  }
});
// add product
router.post("/add", async (req, res) => {
  const data = {
    pro_name: req.body.pro_name,
    pro_price: req.body.pro_price,
    pro_img: req.body.pro_img,
  };
  try {
    const proadd = await productModel(data);
    await proadd.save();
    res.json(proadd);
  } catch (e) {
    console.log(e.message);
  }
});
//  update pro
router.patch("/update/:id", async (req, res) => {
  const data = {
    pro_name: "me",
    pro_price: 0,
    pro_img: "me",
  };
  console.log(data.pro_name + "/" + data.pro_price + "/" + pro_img);

  try {
    const proadd = await productModel.findByIdAndUpdate(
      { _id: req.params.id },
      data
    );
    await proadd.save();
    res.json(proadd);
  } catch (e) {
    console.log(e.message);
  }
});
// delete prc
router.delete("/delete/:id", async (req, res) => {
  try {
    const proadd = await productModel.findByIdAndDelete(req.params.id);

    res.json({ message: "success", success: "true" });
  } catch (e) {
    console.log(e.message);
  }
});
module.exports = router;
