const assert = require('assert');
const sc = require('..');

describe('Profile', () => {
    let profile;
    it('Can construct a profile', () => {
        profile = new sc.Profile([
            { nb: 1, ranks: [0, 1, 2] },
            { nb: 1, ranks: [1, 2, 0] },
            { nb: 1, ranks: [2, 0, 1] },
        ]);
    });
    it('Can build its n-graph', () => {
        assert.deepEqual(
            profile.nGraph,
            [
                [ null, 2, 1 ],
                [ 1, null, 2 ],
                [ 2, 1, null ]
            ]
        );
    });
    it('Can build its p-graph', () => {
        assert.deepEqual(
            profile.pGraph,
            [
                [ null, true, false ],
                [ false, null, true ],
                [ true, false, null ]
            ]
        );
    });
    it('Can compute the Condorcet winner', () => {
        assert.equal(profile.cw, null);
    })
});

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
