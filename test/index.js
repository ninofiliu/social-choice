const assert = require('assert');
const {
    Profile,
    scf: {
        plurality
    }
} = require('../dist/main');

describe('Profile', () => {
    let profile;
    it('Can construct a profile', () => {
        profile = new Profile([
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
});