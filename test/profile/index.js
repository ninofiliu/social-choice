const assert = require('assert');
const sc = require('../../');
const expected = require('./expected');

describe('Profile', () => {
    const profiles = expected.map(e => new sc.Profile(e.r));
    it(
        'n',
        () => assert.deepStrictEqual(profiles.map(p => p.n), expected.map(e => e.n))
    );
    it(
        'm',
        () => assert.deepStrictEqual(profiles.map(p => p.m), expected.map(e => e.m))
    );
    it(
        'p-graph',
        () => assert.deepStrictEqual(profiles.map(p => p.pGraph), expected.map(e => e.pGraph))
    );
    it(
        'n-graph',
        () => assert.deepStrictEqual(profiles.map(p => p.nGraph), expected.map(e => e.nGraph))
    );
    it(
        'Condorcet winner',
        () => assert.deepStrictEqual(profiles.map(p => p.cw), expected.map(e => e.cw))
    );
    it(
        'Summary',
        () => assert.deepStrictEqual(profiles.map(p => p.summary()), expected.map(e => e.summary))
    )
});