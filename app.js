import express from "express";
import prod_router from "./routes/product.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(prod_router);

// app.use(Router);

app.listen(6000, () => {
  console.log("listening on 4000");
});
