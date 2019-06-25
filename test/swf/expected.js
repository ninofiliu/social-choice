module.exports = [
    {
        // 3x3x2 cyclic profile
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 2, ranks: [1,2,0]},
            {nb: 2, ranks: [2,0,1]},
        ],
        scoring: {rScores: [2,3,-1], results: [0,0,0]},
    },
    {
        // American profile
        r: [
            {nb: 1, ranks: [0,1,2]},
            {nb: 1, ranks: [2,1,0]},
        ],
        scoring: {rScores: [2,3,-1], results: [1,0,1]},
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
        scoring: {rScores: [2,3,-1], results: [0,0,0]},
    },
    {
        // Random profile
        // 0 : 2*6+3*1+-1*5 = 12+3-5 = 10
        // 1 : 2*5+3*7 = 31
        // 2 : 2*6+3*4+-1*2 = 12+12-2 = 22
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 5, ranks: [2,1,0]},
            {nb: 4, ranks: [0,0,1]},
            {nb: 1, ranks: [1,0,0]},
        ],
        scoring: {rScores: [2,3,-1], results: [2,0,1]},
    }
];