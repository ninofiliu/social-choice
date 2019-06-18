const assert = require('assert');
const sc = require('../../');
const expected = require('./expected');

describe('SCF', () => {
    const profiles = expected.map(e => new sc.Profile(e.r));
    it(
        'Borda',
        () => assert.deepEqual(
            profiles.map(p => sc.scf.borda(p)),
            expected.map(e => e.borda)
        )
    );
    it(
        'Plurality',
        () => assert.deepEqual(
            profiles.map(p => sc.scf.plurality(p)),
            expected.map(e => e.plurality)
        )
    );
    it(
        'Scoring',
        () => assert.deepEqual(
            profiles.map((p,i) => sc.scf.scoring(p, expected[i].scoring.rScores)),
            expected.map(e => e.scoring.results)
        )
    );
})
