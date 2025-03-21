const rev = require('./reverse.js');
const arr= [1,2,3,4,5];
const arr2= [5,4,3,2,1];

test ('reverse', () => {
    expect(rev(arr)).toEqual([5,4,3,2,1]);
    expect(rev(arr2)).toEqual([1,2,3,4,5]);
});