const everyy= require('./every.js');
const arr=[1,2,3,32]
const arr2=[1,2,3,4]
const square = (x)=> {return x<20;}


test ('every', () => {
    expect(everyy(arr, square)).toBe(false);
    expect(everyy(arr2, square)).toBe(true);
});