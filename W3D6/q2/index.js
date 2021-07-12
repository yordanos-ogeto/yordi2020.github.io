const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    time: date.toTimeString(),
  });
});

app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) age = 0;
  res.render(`Welcome ${name}, at this age of ${age}`);
});
app.listen(3000);
