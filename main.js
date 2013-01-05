var requirejs = require("requirejs");

requirejs(__dirname + "/module.js");

exports.Promesse = requirejs("Promise");
