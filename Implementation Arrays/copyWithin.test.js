const cw = require('./copyWithin.js');
let arr= [1,2,3,4,5];

test ('copyWithin', () => {
    expect(cw(arr,0,3)).toEqual([4,5,3,4,5]);
    expect(cw(arr,0,3,4)).toEqual([4,2,3,4,5]);
});
