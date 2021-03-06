const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

//TEMPLATE ENGİNE
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
