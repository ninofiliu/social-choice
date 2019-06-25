"use strict";
exports.__esModule = true;
/**
 * Sequential majority comparison
 * 1. Compares `order[0]` and `order[1]` (using pairwise majority comparison)
 * 2. Compares the winner of the match above and `order[2]`
 * 3. Compares the winner of the match above and `order[3]`
 * 4. etc
 * @param {Profile} profile
 * @param {number[]} order
 * @returns {number[]}
 */
var smc = function (profile, order) {
    var winner = order[0];
    for (var i = 1; i < order.length; i++) {
        winner = profile.pGraph[winner][order[i]] ? winner : order[i];
    }
    return [winner];
};
exports["default"] = smc;
