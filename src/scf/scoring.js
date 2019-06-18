import Profile from '../profile';

/**
 * General implementation of a scoring rule
 * @param {Profile} profile 
 * @param {number[]} rScores scores of alternatives: `rScores[0]` = score of best alternative
 */
const scoring = (profile, rScores) => {
    const aScores = (new Array(profile.m)).fill(0);
    profile.r.forEach(({nb, ranks}) => {
        ranks.forEach((value, j) => {
            aScores[j]+=nb*rScores[value];
        });
    });
    const maxScore = Math.max(...aScores);
    const winners = [];
    aScores.forEach((score, j) => score==maxScore && winners.push(j));
    return winners;
}
export default scoring;