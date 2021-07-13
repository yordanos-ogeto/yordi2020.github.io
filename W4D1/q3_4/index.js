const express = require("express");
const path = require("path");
const app = express();

let Product = require("./model/Product");
let Cart = require("./model/Cart");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  res.render("index", { products: Product.getAllProducts() });
});
app.get("/cart", (req, res) => {
  let cart = new Cart();
  for (let i of Product.getAllProducts()) {
    cart.add(i);
  }
  res.render("shoppingCart", { items: cart.getAll() });
});
app.listen(5000);
