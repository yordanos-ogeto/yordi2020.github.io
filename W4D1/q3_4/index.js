let express = require("express");
let path = require("path");
const session = require("express-session");
let app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use("/css", express.static(path.join(__dirname, "css")));
app.use(session({ secret: "my secret" }));

app.get("/fruit", (req, res) => {
  let product = {
    name: "Fruit",
    price: 100,
    id: 0,
    description: "Amazing health benefits!",
  };
  res.render("product.ejs", product);
});

app.get("/vigitables", (req, res) => {
  let product = {
    name: "Vigitables",
    price: 50,
    id: 1,
    description: "Safe and healthy diet",
  };
  res.render("product.ejs", product);
});

app.get("/shoes", (req, res) => {
  let product = {
    name: "Shoes",
    price: 200,
    id: 2,
    description: "Skechers",
  };
  res.render("product.ejs", product);
});

app.get("/cart", (req, res) => {
  let products = req.session.cart;
  console.log(products);
  res.render("shoppingcart.ejs", { products });
});

app.post("/addToCart", (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let product = { name: name, price: price };
  res.session = req.session;
  if (!res.session.cart) {
    res.session.cart = {};
  }
  let cnt = res.session.cart[name] ? res.session.cart[name].count : 0;
  res.session.cart[name] = { count: cnt + 1, value: product };
  res.redirect("/cart");
});

app.listen(5000);
