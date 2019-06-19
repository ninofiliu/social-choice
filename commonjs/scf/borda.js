"use strict";
exports.__esModule = true;
var scoring_1 = require("./scoring");
/**
 * Borda's rule
 * Scoring rule scores `[m-1, ..., 0]`
 * @param {Profile} profile
 * @returns {number[]}
 */
var borda = function (profile) {
    var rScores = (new Array(profile.m)).fill().map(function (_, j) { return profile.m - j - 1; });
    return scoring_1["default"](profile, rScores);
};
exports["default"] = borda;
