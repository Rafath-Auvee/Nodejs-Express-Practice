const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hi")
  // res.status(500).json({message: "ERROR"})
  // res.json({message: "ERROR"})
  // res.download("index.js");
  res.render("index", { text: world });
});

app.listen(3000);
