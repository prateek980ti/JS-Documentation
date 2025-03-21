const sq = require('./filter.js');
const square = (x)=> {return x<20;}

const arr1=[1,2,3,32]
const arr2=[1,2,3,4]
test ('filter', () => {
    expect(sq(arr1, square)).toEqual([1,2,3]);
    expect(sq(arr2, square)).toEqual([1,2,3,4]);
});