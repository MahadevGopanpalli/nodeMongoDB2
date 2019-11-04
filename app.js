// Import mongoose for interacting with mongodb
var mongoose = require('mongoose');

// Load our database schema in format of model
var batches = require("./model/batches.model");

// Import express to design server
var express = require("express");

// Import path module for path operations
var path = require("path");

// Import exxpresshandlebars for designing the templates
var expresshandlebars = require("express-handlebars");

// Import boddparser
var bodyparser = require("body-parser");

// It is the controller for all routes in the application
var controller = require("./controller/batches");

// Create object of express
var eobj = express();

// Connect with the mongodb databse
mongoose.connect("mongodb://localhost:27017/DBS", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("Fail to connect the database");
    } else {
        console.log("Succesfully connnected the database");
    }
});

// Use bodyparser module for express server
eobj.use(bodyparser.urlencoded({
    extended: true
}));

// Method to perform connnnection of cliennt with server
eobj.get('/', function(req, res) {
    // Insted of directly sendinng the data use hbs files
    res.render("index", {});
});

// Start the server in listening mode at port 3000
eobj.listen(3000, function() {
    console.log("Server listening");
})

// Use the controller for /batches path
eobj.use('/batches', controller);

// Set views for html templates
eobj.set('views', path.join(__dirname, "/views/"));

// Use expresshandlebars
eobj.engine("hbs", expresshandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

eobj.set("view engine", "hbs");