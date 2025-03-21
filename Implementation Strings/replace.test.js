const replacee = require('./replace');

const mood = "I am very happy";
// console.log(mood); 
let a = "happy";
let b = "sad";

test('replace', () => {
    expect(replacee(mood, a , b)).toBe("I am very sad");
});