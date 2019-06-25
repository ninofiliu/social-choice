import Profile from '../profile';

/**
 * General implementation of a scoring rule
 * @param {Profile} profile 
 * @param {number[]} rScores scores of alternatives: `rScores[0]` = score of best alternative
 * @returns {number[]}
 */
const scoring = (profile, rScores) => {

    
    /** @type {number[]} */
    const aScores = (new Array(profile.m)).fill(0);
    profile.r.forEach(({nb, ranks}) => {
        ranks.forEach((value, j) => {
            aScores[j]+=nb*rScores[value];
        });
    });
    const uniqueAScores = aScores
        .reduce((acc, cur) => acc.indexOf(cur)>=0 ? acc : [...acc, cur], [])
        .sort((a,b) => b-a);
    return aScores.map(s => uniqueAScores.indexOf(s));
}

export default scoring;