module.exports = [
    {
        // 3x3x2 cyclic profile
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 2, ranks: [1,2,0]},
            {nb: 2, ranks: [2,0,1]},
        ],
        plurality: [0,1,2],
        borda: [0,1,2],
        scoring: {rScores: [10,15,-5], results: [0,1,2]},
        antiPlurality: [0,1,2],
    }
];