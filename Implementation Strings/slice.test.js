const sliceee = require('./slice');
const mood = "I am very happy because I am rich.";
let x=5;
let y = 15;
test ('slice', () => {
    expect(sliceee(mood, x, y)).toBe("very happy");
    expect(sliceee(mood, -50, -1)).toBe("I am very happy because I am rich");
    expect(sliceee(mood,-13)).toBe("se I am rich.");
});