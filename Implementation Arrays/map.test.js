const mapp = require('./map.js');
const array1 = [1, 4, 9, 16];
const dble=(x)=>{
    return x*2;
}

test ('map', () => {
    expect(mapp(array1,dble)).toEqual([2, 8, 18, 32]);
}) 