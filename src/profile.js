export default class Profile {

    /**
     * Creates a rich preference profile object with initialized values of:
     * - condorcet winner
     * - C1 graph
     * - C2 graph
     * @param {{nb: number, ranking: number[]}[]} r 
     */
    constructor(r) {
        this.r = r;
        this.n = null; // TODO
        this.p = null; // TODO
        this.cw = null; // TODO
    }

    /**
     * Gets the value of `$n_{xy} = |\{ i \in N : x R_i y \}$`
     * @param {number} x 
     * @param {number} y
     * @returns {number} 
     */
    getN(x,y) {
        // TODO
        return null;
    }

    /**
     * Computes the Condorcet winner.
     * Returns null if it doesn't exist.
     * @returns {number|null}
     */
    getCW() {
        // TODO
        return null;
    }
}