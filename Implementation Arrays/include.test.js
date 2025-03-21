const sq = require('./include.js');
const array1 = [1, 2, 3];

test ('find', () => {
    expect(sq(array1, 2)).toBe(true);
    expect(sq(array1, 10)).toBe(false);
});