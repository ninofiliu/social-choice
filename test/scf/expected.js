module.exports = [
    {
        // 3x3x2 cyclic profile
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 2, ranks: [1,2,0]},
            {nb: 2, ranks: [2,0,1]},
        ],
        antiPlurality: [0,1,2],
        borda: [0,1,2],
        plurality: [0,1,2],
        scoring: {rScores: [10,15,-5], results: [0,1,2]},
        smc: {order: [0,1,2], results: [2]},
    },
    {
        // American profile
        r: [
            {nb: 1, ranks: [0,1,2]},
            {nb: 1, ranks: [2,1,0]},
        ],
        antiPlurality: [1],
        borda: [0,1,2],
        plurality: [0,2],
        scoring: {rScores: [10,15,-5], results: [1]},
        smc: {order: [0,1,2], results: [2]},
    },
    {
        // French profile
        r: [
            {nb: 1, ranks: [0,1,2]},
            {nb: 1, ranks: [0,2,1]},
            {nb: 1, ranks: [1,0,2]},
            {nb: 1, ranks: [1,2,0]},
            {nb: 1, ranks: [2,0,1]},
            {nb: 1, ranks: [2,1,0]},
        ],
        antiPlurality: [0,1,2],
        borda: [0,1,2],
        plurality: [0,1,2],
        scoring: {rScores: [10,15,-5], results: [0,1,2]},
        smc: {order: [0,1,2], results: [2]},
    },
    {
        // Random profile
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 5, ranks: [2,1,0]},
            {nb: 4, ranks: [0,0,1]},
            {nb: 1, ranks: [1,0,0]},
        ],
        antiPlurality: [1],
        borda: [1],
        plurality: [0,2],
        scoring: {rScores: [10,15,-5], results: [1]},
        smc: {order: [0,1,2], results: [1]},
    }
];