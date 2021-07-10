const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date_ob.getHours();
  let response =
    "!DOCTYPE html" +
    "<html>" +
    "<head>" +
    "<title>ExpressAssignment</title>"`<link href = "${
      hour >= 6 && hour <= 18 ? "/css/day.css" : "/css/night.css"
    }" rel = "stylesheet">` +
    "</head>" +
    "<body>" +
    "<form action = '/result>' method ='post'>" +
    "<lable>Name</lable> <input type='text' name='name'/>" +
    "<lable>Age</lable> <input type='number' name='age'/>" +
    "<input type='submit' value='submit query'/>" +
    "</form>" +
    "</body>" +
    "<html>";
  res.send(response);
});
app.post("/result", (req, res) => {
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});
app.get("/output", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "person";
  }
  if (!age) age = 0;
  res.send(`Welcome ${name}, at this age of ${age}`);
});

app.listen(3000);
