const sq = require('./findLastIndex.js');
const ffff = (x)=> {return x>70;}
const arr = [5, 12, 8, 130, 290 , 44];


test ('find', () => {
    expect(sq(arr, ffff)).toBe(4);
});
