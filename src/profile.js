export default class Profile {

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
    constructor(r) {
        this.r = r;
        this.n = r.reduce((acc, cur) => acc+cur.nb, 0);
        this.m = r[0].ranks.length;
        this.nGraph = (new Array(this.m)).fill(null).map((_,x) => (
            (new Array(this.m)).fill(null).map((_,y) => (
                x==y ? null : this.getNXY(x,y)
            ))
        ));
        this.pGraph = (new Array(this.m)).fill(null).map((_,x) => (
            (new Array(this.m)).fill(null).map((_,y) => (
                x==y ? null : this.nGraph[x][y]>this.nGraph[y][x]
            ))
        ));
        this.cw = this.getCW();
    }

    /**
     * Gets the value of `$n_{xy} = |\{ i \in N : x R_i y \}$`
     * @param {number} x 
     * @param {number} y
     * @returns {number} 
     */
    getNXY(x,y) {
        let ret = 0;
        for (let ri of this.r) {
            if (ri.ranks[x]<ri.ranks[y]) {
                ret+= ri.nb;
            }
        }
        return ret;
    }

    /**
     * Computes the Condorcet winner.
     * Returns null if it doesn't exist.
     * @returns {number|null}
     */
    getCW() {
        for (let x=0; x<this.m; x++) {
            let winAll = true;
            for (let y=0; y<this.m; y++) {
                if (x!=y) {
                    winAll = winAll && this.pGraph[x][y];
                }
            }
            if (winAll) return x;
        }
        return null;
    }

    /**
     * The profile, as a readable string
     * @returns {string}
     */
    summary() {
        const headers = this.r.map(x => x.nb.toString());
        const maxHeaderLen = Math.max(...headers.map(s => s.length));
        headers = headers.map(s => s+(new Array(maxHeaderLen-s.length)).fill(' ').join(''));

        /** @type {number[][]} */
        const inverseRanks = (new Array(this.r.length)).fill().map(() => 
            (new Array(this.m)).fill().map(() => 
                []
            )
        );
        for (let i=0; i<this.r.length; i++) {
            this.r[i].ranks.forEach((rank, j) => {
                inverseRanks[i][rank].push(j);
            })
        }
        inverseRanks = inverseRanks.map(line => line.map(arr => arr.join(' ')));
        for (let rank=0; rank<this.m; rank++) {
            let maxLen = Math.max(...(new Array(this.r.length)).fill().map((_,i) => inverseRanks[i][rank].length));
            for (let i=0; i<this.r.length; i++) {
                inverseRanks[i][rank]+=(new Array(maxLen-inverseRanks[i][rank].length)).fill(' ').join('');
            }
        }
        const contents = inverseRanks.map(line => line.join(' : '));

        /** @type {string} */
        const readableProfile = (new Array(this.r.length)).fill()
            .map((_,i) => `${headers[i]} | ${contents[i]}`)
            .join('\n');
        
        return [
            (new Array(readableProfile.split('\n')[0].length)).fill('-').join(''),
            readableProfile,
            (new Array(readableProfile.split('\n')[0].length)).fill('-').join(''),
            `n: ${this.n}`,
            `m: ${this.m}`,
            `Condorcet winner: ${this.cw}`
        ].join('\n');
    }
}