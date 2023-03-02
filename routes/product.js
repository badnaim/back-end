import express from "express";
// import bodyParser from "body-parser";

const Router = express.Router();

let products = [];

Router.get("/products", (req, res) => {
  console.log("get husel orj irle");
  res.status(200).send({ message: "prod" });
});

Router.post("/products", (req, res) => {
  const { body } = req;
  console.log(body);
  products.push(req.body);
  req.body.id = products.length + 1;
  res.status(200).send(products);
});

Router.delete("/products/delete", (req, res) => {
  console.log("delete");
  products.pop();
  res.status(200).send(products);
});

export default Router;
