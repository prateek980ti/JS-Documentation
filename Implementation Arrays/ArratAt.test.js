const att= require('./ArrayAt.js');
const array = [5, 12, 8, 130, 44];
let index = -3;

test ('ArrayAt', () => {
    expect(att(index)).toBe(8);
    expect(att(2)).toBe(8);
});