const assert = require('assert');
const sc = require('../..');
const expected = require('./expected');

describe('SWF', () => {
    const profiles = expected.map(e => new sc.Profile(e.r));
    it(
        'Scoring',
        () => assert.deepEqual(
            profiles.map((p,i) => sc.swf.scoring(p, expected[i].scoring.rScores)),
            expected.map(e => e.scoring.results)
        )
    )
});