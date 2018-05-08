// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars")

// Sets up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
     extended: true
    }));

    // routes
app.use(express.static(__dirname + "/public"));    

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });