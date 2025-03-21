const srch = require('./search');
const mood = "I am very happy happy happy";
let y = "very";

test ('search', () => {
    expect(srch(mood,y)).toBe(5);
});