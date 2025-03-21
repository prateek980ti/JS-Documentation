const lower = require('./lowercase.js')
const mood = "HELLO DOSTO ji";

test('lowercase', () => {
    expect(lower(mood)).toBe("hello dosto ji");
});