const flatten = require('./flat.js');
const arr= [0, 1, [2, [3, [4, 5]]]];

test ('flat', () => {
    expect(flatten(arr)).toEqual([0, 1, 2, 3, 4, 5]);
});