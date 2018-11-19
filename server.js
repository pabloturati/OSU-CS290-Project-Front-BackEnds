/*********************************************************************
 ** Author: Pablo Turati ID#: 933198349 turatip@oregonstate.edu
 ** Date: November 18th, 2018
 ** Description: "Server Code"
 *********************************************************************/

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const handlebars = require("express-handlebars").create({
  defaultLayout: "main"
});

//Middleware to the buld
app.use(express.static(path.join(__dirname, "build")));

//POST middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars setup
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

//Set port
app.set("port", 1234);

//Get Request handler
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//Page not found handler
app.use(function(req, res) {
  res.status(404);
  res.render("404");
});

//Default error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type("plain/text");
  res.status(500);
  res.render("500");
});

//Port callback
app.listen(app.get("port"), function() {
  console.log(
    "Listening on port:" + app.get("port") + "; press Ctrl-C to terminate."
  );
});
