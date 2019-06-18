const assert = require('assert');
const sc = require('../../');
const expected = require('./expected');

describe('Profile', () => {
    const profiles = expected.map(e => new sc.Profile(e.r));
    it(
        'Computes n',
        () => assert.deepEqual(profiles.map(p => p.n), expected.map(e => e.n))
    );
    it(
        'Computes m',
        () => assert.deepEqual(profiles.map(p => p.m), expected.map(e => e.m))
    );
    it(
        'Computes the p-graph',
        () => assert.deepEqual(profiles.map(p => p.pGraph), expected.map(e => e.pGraph))
    );
    it(
        'Computes the n-graph',
        () => assert.deepEqual(profiles.map(p => p.nGraph), expected.map(e => e.nGraph))
    );
    it(
        'Computes the Condorcet winner',
        () => assert.deepEqual(profiles.map(p => p.cw), expected.map(e => e.cw))
    );
});