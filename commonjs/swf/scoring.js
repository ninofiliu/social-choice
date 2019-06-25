"use strict";
exports.__esModule = true;
/**
 * General implementation of a scoring rule
 * @param {Profile} profile
 * @param {number[]} rScores scores of alternatives: `rScores[0]` = score of best alternative
 * @returns {number[]}
 */
var scoring = function (profile, rScores) {
    /** @type {number[]} */
    var aScores = (new Array(profile.m)).fill(0);
    profile.r.forEach(function (_a) {
        var nb = _a.nb, ranks = _a.ranks;
        ranks.forEach(function (value, j) {
            aScores[j] += nb * rScores[value];
        });
    });
    var uniqueAScores = aScores
        .reduce(function (acc, cur) { return acc.indexOf(cur) >= 0 ? acc : acc.concat([cur]); }, [])
        .sort(function (a, b) { return b - a; });
    return aScores.map(function (s) { return uniqueAScores.indexOf(s); });
};
exports["default"] = scoring;
