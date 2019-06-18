import Profile from '../profile';
import scoringRule from './scoring-rule';

/**
 * Borda's rule
 * Scoring rule scores `[m-1, ..., 0]`
 * @param {Profile} profile
 * @returns {number[]}
 */
const borda = profile => {
    const rScores = (new Array(profile.m)).fill().map((_,j) => profile.m-j-1);
    return scoringRule(profile, rScores);
}
export default borda;