var mongoose = require('mongoose');

var express = require("express");

var router = express.Router();

var batchmodel = mongoose.model('marvellous', 'batches');

router.get("/list", function(req, res) {
    batchmodel.find(function(err, docs) {
        if (err) {
            res.send("Error");
        } else {
            console.log(docs);
            res.render("list", { data: docs });
        }
    });
});

router.get("/add", function(req, res) {
    res.render("addbatch");
});

router.post("/add", function(req, res) {
    var obj = new batchmodel();
    obj.name = req.body.batchname;
    obj.fees = req.body.batchfees;
    obj.save(function(err, doc) {
        if (!err) {
            res.redirect("/batches/list");
        } else {
            res.send("Error while writting data");
        }
    });
});

module.exports = router;