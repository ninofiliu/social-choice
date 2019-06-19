"use strict";
exports.__esModule = true;
/**
 * Choses the candidates who are least preferred by the least amount of voters
 * @param {Profile} profile
 * @returns {number[]}
 */
var antiPlurality = function (profile) {
    var scores = (new Array(profile.m)).fill(0);
    profile.r.forEach(function (_a) {
        var nb = _a.nb, ranks = _a.ranks;
        var maxRank = Math.min.apply(Math, ranks);
        ranks.forEach(function (rank, j) {
            if (rank == maxRank)
                scores[j] -= nb;
        });
    });
    var maxScore = Math.max.apply(Math, scores);
    return scores.reduce(function (winners, score, j) { return score == maxScore ? winners.concat([j]) : winners; }, []);
};
exports["default"] = antiPlurality;
