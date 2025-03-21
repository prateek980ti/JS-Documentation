const sq = require('./lastindexof.js');
const arr= [1,2,2,,2,2];

test ('lastindexof', () => {
    expect(sq(arr, 2)).toBe(5);
});