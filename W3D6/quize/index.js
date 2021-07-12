// const express = require("express");
// const app = express();
// app.use(express.urlencoded({ extended: false }));

// let list = [];

// app.get("/", (req, res) => {
//   let output = "<ul>";
//   for (i of list) {
//     output += `<li>${i}</li>`;
//   }
//   output += "</ul><a href='/add'>add</a>";
//   res.send(output);
// });

// app.get("/add", (req, res) => {
//   res.send(
//     `<form method="post"><input name="item" /><input type="submit" /></form>`
//   );
// });

// app.post("/add", (req, res) => {
//   list.push(req.body.item);
//   res.redirect(302, "/");
// });
// app.listen(3000);

const express = require("express");
const app = express();

let html = "";
const arr = ["joy", "happy"];
app.get("/", (req, res) => {
  let val = "";
  for (i of arr) {
    console.log(i);
    val = val + "<li>" + i + "</li>";
  }

  val = "<ul>" + val + "</ul>" + "<a href ='/add'>add</a>";
  console.log(val);
  res.send(val);
});
app.listen(3000);

app.get("/add", (req, res) => {
  html =
    "<form method='post'>" +
    "<input name ='name'/>" +
    "<input type ='submit'/>" +
    "</form>";
  res.send(html);
});
app.use(express.urlencoded({ extended: false }));
app.post("/add", (req, res) => {
  let x = req.body.name;
  arr.push(x);
  res.redirect("/");
});
