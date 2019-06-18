require('./profile');

const assert = require('assert');
const sc = require('..');

describe('SCF', () => {
    it('Plurality', () => {
        const profile = new sc.Profile([
            { nb: 1, ranks: [0, 1, 2] },
            { nb: 1, ranks: [1, 2, 0] },
            { nb: 1, ranks: [2, 0, 1] },
        ]);
        assert.deepEqual(sc.scf.plurality(profile), [0,1,2]);
    });
});
