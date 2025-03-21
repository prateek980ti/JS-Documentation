const filll= require ('./fill.js');
const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

test ('fill', () => {
    expect(filll(array1, 0, 2, 4)).toEqual([ 1, 2, 0, 0 ]);
    expect(filll(array2, 1, 3, 4)).toEqual([1, 2, 3, 1]);
});

