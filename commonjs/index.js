"use strict";
exports.__esModule = true;
var profile_1 = require("./profile");
exports.Profile = profile_1["default"];
var anti_plurality_1 = require("./scf/anti-plurality");
var borda_1 = require("./scf/borda");
var plurality_1 = require("./scf/plurality");
var scoring_1 = require("./scf/scoring");
var smc_1 = require("./scf/smc");
var scf = {
    antiPlurality: anti_plurality_1["default"],
    borda: borda_1["default"],
    plurality: plurality_1["default"],
    scoring: scoring_1["default"],
    smc: smc_1["default"]
};
exports.scf = scf;
