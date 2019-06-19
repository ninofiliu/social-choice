module.exports = [
    {
        // 3x3x2 cyclic profile
        r: [
            {nb: 2, ranks: [0,1,2]},
            {nb: 2, ranks: [1,2,0]},
            {nb: 2, ranks: [2,0,1]},
        ],
        n: 6,
        m: 3,
        nGraph: [
            [null,4,2],
            [2,null,4],
            [4,2,null]
        ],
        pGraph: [
            [null,true,false],
            [false,null,true],
            [true,false,null]
        ],
        cw: null,
        summary: `-------------
2 | 0 : 1 : 2
2 | 2 : 0 : 1
2 | 1 : 2 : 0
-------------
n: 6
m: 3
Condorcet winner: null`
    },
    {
        // french profile
        r: [
            {nb: 1, ranks: [0,1,2]},
            {nb: 1, ranks: [0,2,1]},
            {nb: 1, ranks: [1,0,2]},
            {nb: 1, ranks: [1,2,0]},
            {nb: 1, ranks: [2,0,1]},
            {nb: 1, ranks: [2,1,0]},
        ],
        n: 6,
        m: 3,
        nGraph: [
            [null,3,3],
            [3,null,3],
            [3,3,null],
        ],
        pGraph: [
            [null,false,false],
            [false,null,false],
            [false,false,null],
        ],
        cw: null,
        summary: `-------------
1 | 0 : 1 : 2
1 | 0 : 2 : 1
1 | 1 : 0 : 2
1 | 2 : 0 : 1
1 | 1 : 2 : 0
1 | 2 : 1 : 0
-------------
n: 6
m: 3
Condorcet winner: null`
    },
];