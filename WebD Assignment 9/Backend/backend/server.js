var express = require("express");
var cors = require('cors')
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");

var port = process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/UserDb", {useNewUrlParser: true});

app.use(bodyParser.json());

app.use(bodyParser.json({type: "applications/vnd.api+json"}));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(methodOverride("X-HTTP-Method-Override"));

app.use(express.static(__dirname + "/public"));

app.use(cors ({origin: '*'}));

require("./api/routes")(app);

app.listen(port);

console.log("App Started at port " + port);

exports = module.exports = app;
