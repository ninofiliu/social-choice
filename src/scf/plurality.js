import Profile from '../profile';

/**
 * Choses the candidates who are preferred by the largest number of voters
 * `$ f(R_N, A) = \{ x \in A : \forall y in A, n_x \ge n_y \} $`
 * @param {Profile} profile
 * @returns {number[]}
 */
const plurality = profile => {
    // n[j]: number of voters who have j as their preferred alternative
    const n = (new Array(profile.m)).fill(0);
    profile.r.forEach(({nb, ranks}) => {
        ranks.forEach((rank, j) => {
            if (rank==0) {
                n[j]+=nb;
            }
        });
    });
    const nMax = Math.max(...n);
    const ret = n.reduce((acc, cur, j) => cur==nMax ? [...acc, j] : acc, []);
    return ret;
}

export default plurality;