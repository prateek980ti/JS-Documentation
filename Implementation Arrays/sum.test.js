const som = require ('./sum.js');
some=(x) => {return x % 2 === 0};
const arr = [1, 2, 3, 4];
const arr2 = [5, 7, 3, 11];

test ('sum', () => {
    expect(som(arr, some)).toBe(true);
    expect(som(arr2, some)).toBe(false);
});
