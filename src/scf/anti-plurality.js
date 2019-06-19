import Profile from '../profile';

/**
 * Choses the candidates who are least preferred by the least amount of voters
 * @param {Profile} profile
 * @returns {number[]} 
 */
const antiPlurality = profile => {
    const scores = (new Array(profile.m)).fill(0);
    profile.r.forEach(({nb, ranks}) => {
        const maxRank = Math.min(...ranks);
        ranks.forEach((rank, j) => {
            if (rank==maxRank) scores[j]-=nb;
        })
    });
    const maxScore = Math.max(...scores);
    return scores.reduce((winners, score, j) => score==maxScore ? [...winners, j] : winners, []);
}

export default antiPlurality;