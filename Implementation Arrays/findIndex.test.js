const sq = require('./findIndex.js');
const ffff = (x)=> {return x>70;}

const arr = [5, 12, 8, 130, 44];
test ('find', () => {
    expect(sq(arr, ffff)).toBe(3);
});