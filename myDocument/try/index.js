const express = require("express");
const app = express();
const port = 5000;

//register view engin
app.set("view engine", "ejs");
//app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.locals = { title: "Cs572" };
  res.render("index.ejs");
});
app.listen(port, () => console.log(`listening on port ${port}`));
