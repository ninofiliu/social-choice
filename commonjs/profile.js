"use strict";
exports.__esModule = true;
var Profile = /** @class */ (function () {
    /**
     * Creates a rich preference profile object with initialized values of:
     * - condorcet winner
     * - p-graph aka C1-graph: oriented graph of pairwise comparisons
     * - n-graph aka C2-graph: graph of n_xy values
     *
     * The r parameter defines the R_N object as such:
     * - `r[i].nb`: number of voters who have the preference R_i defined by `r[i].ranks`
     * - `r[i].ranks[j]`: rank of the j-th alternative when ordered as defined by the relation R_i
     * @param {{nb: number, ranks: number[]}[]} r
     */
    function Profile(r) {
        var _this = this;
        this.r = r;
        this.n = r.reduce(function (acc, cur) { return acc + cur.nb; }, 0);
        this.m = r[0].ranks.length;
        this.nGraph = (new Array(this.m)).fill(null).map(function (_, x) { return ((new Array(_this.m)).fill(null).map(function (_, y) { return (x == y ? null : _this.getNXY(x, y)); })); });
        this.pGraph = (new Array(this.m)).fill(null).map(function (_, x) { return ((new Array(_this.m)).fill(null).map(function (_, y) { return (x == y ? null : _this.nGraph[x][y] > _this.nGraph[y][x]); })); });
        this.cw = this.getCW();
    }
    /**
     * Gets the value of `$n_{xy} = |\{ i \in N : x R_i y \}$`
     * @param {number} x
     * @param {number} y
     * @returns {number}
     */
    Profile.prototype.getNXY = function (x, y) {
        var ret = 0;
        for (var _i = 0, _a = this.r; _i < _a.length; _i++) {
            var ri = _a[_i];
            if (ri.ranks[x] < ri.ranks[y]) {
                ret += ri.nb;
            }
        }
        return ret;
    };
    /**
     * Computes the Condorcet winner.
     * Returns null if it doesn't exist.
     * @returns {number|null}
     */
    Profile.prototype.getCW = function () {
        for (var x = 0; x < this.m; x++) {
            var winAll = true;
            for (var y = 0; y < this.m; y++) {
                if (x != y) {
                    winAll = winAll && this.pGraph[x][y];
                }
            }
            if (winAll)
                return x;
        }
        return null;
    };
    /**
     * The profile, as a readable string
     * @returns {string}
     */
    Profile.prototype.summary = function () {
        var _this = this;
        var headers = this.r.map(function (x) { return x.nb.toString(); });
        var maxHeaderLen = Math.max.apply(Math, headers.map(function (s) { return s.length; }));
        headers = headers.map(function (s) { return s + (new Array(maxHeaderLen - s.length)).fill(' ').join(''); });
        /** @type {number[][]} */
        var inverseRanks = (new Array(this.r.length)).fill().map(function () {
            return (new Array(_this.m)).fill().map(function () {
                return [];
            });
        });
        var _loop_1 = function (i) {
            this_1.r[i].ranks.forEach(function (rank, j) {
                inverseRanks[i][rank].push(j);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.r.length; i++) {
            _loop_1(i);
        }
        inverseRanks = inverseRanks.map(function (line) { return line.map(function (arr) { return arr.join(' '); }); });
        var _loop_2 = function (rank) {
            var maxLen = Math.max.apply(Math, (new Array(this_2.r.length)).fill().map(function (_, i) { return inverseRanks[i][rank].length; }));
            for (var i = 0; i < this_2.r.length; i++) {
                inverseRanks[i][rank] += (new Array(maxLen - inverseRanks[i][rank].length)).fill(' ').join('');
            }
        };
        var this_2 = this;
        for (var rank = 0; rank < this.m; rank++) {
            _loop_2(rank);
        }
        var contents = inverseRanks.map(function (line) { return line.join(' : '); });
        /** @type {string} */
        var readableProfile = (new Array(this.r.length)).fill()
            .map(function (_, i) { return headers[i] + " | " + contents[i]; })
            .join('\n');
        return [
            (new Array(readableProfile.split('\n')[0].length)).fill('-').join(''),
            readableProfile,
            (new Array(readableProfile.split('\n')[0].length)).fill('-').join(''),
            "n: " + this.n,
            "m: " + this.m,
            "Condorcet winner: " + this.cw
        ].join('\n');
    };
    return Profile;
}());
exports["default"] = Profile;
