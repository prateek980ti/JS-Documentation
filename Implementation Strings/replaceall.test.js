const replacee = require('./replaceall');

const mood = "I am very happy happy happy  ";
let a = "happy";
let b = "sad";

test('replaceall', () => {
    expect(replacee(mood, a , b)).toBe("I am very sad sad sad  ");
});