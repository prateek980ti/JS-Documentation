const bubble = require('./sort.js');
const arr= [9,6,4,3,2];
const arr2= [1,2,3,4,5,6,7,8,9];

test ('sort', () => {
    expect(bubble(arr)).toEqual([2,3,4,6,9]);    
    expect(bubble(arr2)).toEqual([1,2,3,4,5,6,7,8,9]);    

});
