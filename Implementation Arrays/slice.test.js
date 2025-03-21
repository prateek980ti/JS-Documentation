const sss  = require('./slice.js');
const arr= [1,2,3,4,5];

test ('slice', () => {
    expect(sss(arr,2,-1)).toEqual([3,4]);
    expect(sss(arr,2,3)).toEqual([3]);
});