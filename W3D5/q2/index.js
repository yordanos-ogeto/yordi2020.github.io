const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(
    '<form action ="/result" method ="post"><lable>Name</lable><input type="text" name="name"/><lable>Age</lable><input type="number" name = "age"/><input type ="submit" value="Submit Query"></form>'
  );
});
app.post("/result", (req, res, next) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) age = 0;
  res.send(`Welcome ${name}, at this age of ${age}`);
});
app.listen(3000);
