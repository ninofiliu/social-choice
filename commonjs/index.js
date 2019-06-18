"use strict";
exports.__esModule = true;
var profile_1 = require("./profile");
exports.Profile = profile_1["default"];
var borda_1 = require("./scf/borda");
var plurality_1 = require("./scf/plurality");
var scoring_1 = require("./scf/scoring");
var scf = {
    borda: borda_1["default"],
    plurality: plurality_1["default"],
    scoring: scoring_1["default"]
};
exports.scf = scf;
