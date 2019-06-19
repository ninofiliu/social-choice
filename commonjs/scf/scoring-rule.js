"use strict";
exports.__esModule = true;
/**
 * General implementation of a scoring rule
 * @param {Profile} profile
 * @param {number[]} rScores scores of alternatives: `rScores[0]` = score of best alternative
 */
var scoringRule = function (profile, rScores) {
    var aScores = (new Array(profile.m)).fill(0);
    profile.r.forEach(function (_a) {
        var nb = _a.nb, ranks = _a.ranks;
        ranks.forEach(function (value, j) {
            aScores[j] += nb * rScores[value];
        });
    });
    var maxScore = Math.max.apply(Math, aScores);
    var winners = [];
    aScores.forEach(function (score, j) { return score == maxScore && winners.push(j); });
    return winners;
};
exports["default"] = scoringRule;
