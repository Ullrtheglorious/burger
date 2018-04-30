var express = require("express");

var router = express.Router();


var cat = require("../models/burgers.js");


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var edbObject = {
            burgers: data
        };
        console.log(edbObject);
        res.render('index', edbObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body.name)
    orm.insertOne([
        req.body.name
    ], function (result) {
        // Send back the ID of the new quote
        return res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;

    console.log("condition", condition);

    orm.updateOne(condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;