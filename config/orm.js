
var mysql = require("mysql");
var connection = require('./connection.js');

var orm = {
  selectAll: function(burgs) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(burgs);
      burgs(res);
    });
  },
  insertOne: function(val, burgs) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, val, function(err, result) {
      if (err) throw err;
      burgs(res);
    });
  },
  updateOne: function(condition, burgs) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryString, [condition], function(err, result) {
        if (err) throw err;
        burgs(res);
      }
    );
  }
};

module.exports = orm;
