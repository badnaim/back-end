import express from "express";

const Router = express.Router();

let users = [];

Router.get("/users", (req, res) => {
  console.log("get husel orj irle");
  res.status(200).send({ message: "prod" });
});

Router.post("/users", (req, res) => {
  const { body } = req;
  console.log(body);
  users.push(req.body);
  //   req.body.id = users.length + 1;
  res.status(200).send(users);
});

Router.delete("/users/delete", (req, res) => {
  console.log("delete");
  users.pop();
  res.status(200).send(users);
});

export default Router;
