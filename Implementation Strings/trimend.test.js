const ttt = require('./trimend.js');
const mood = "      I am very happy because I am     rich.          ";

test('trimend', () => {
    expect(ttt(mood)).toBe("      I am very happy because I am     rich.");
});