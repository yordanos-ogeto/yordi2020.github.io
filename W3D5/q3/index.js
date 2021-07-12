const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date_ob.getHours();
  let response =
    "!DOCTYPE html" +
    "<html>" +
    "<head>" +
    "<title>ExpressAssignment</title>" +
    `<link href = "${
      hour >= 6 && hour <= 18 ? "/css/day.css" : "/css/night.css"
    }" rel = "stylesheet">` +
    "</head>" +
    "<body>" +
    "<form action = '/result>' method ='post'>" +
    "<form>" +
    "<lable>Name</lable> <input type='text' name='name'/>" +
    "<lable>Age</lable> <input type='number' name='age'/>" +
    "<input type='submit' value='submit query'/>" +
    "</form>" +
    "</body>" +
    "<html>";
  res.send(response);
});
app.listen(3000);
