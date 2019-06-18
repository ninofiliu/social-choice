"use strict";
exports.__esModule = true;
/**
 * Choses the candidates who are preferred by the largest number of voters
 * `$ f(R_N, A) = \{ x \in A : \forall y in A, n_x \ge n_y \} $`
 * @param {Profile} profile
 * @returns {number[]}
 */
var plurality = function (profile) {
    // n[j]: number of voters who have j as their preferred alternative
    var n = (new Array(profile.m)).fill(0);
    profile.r.forEach(function (_a) {
        var nb = _a.nb, ranks = _a.ranks;
        ranks.forEach(function (rank, j) {
            if (rank == 0) {
                n[j] += nb;
            }
        });
    });
    var nMax = Math.max.apply(Math, n);
    var ret = n.reduce(function (acc, cur, j) { return cur == nMax ? acc.concat([j]) : acc; }, []);
    return ret;
};
exports["default"] = plurality;
