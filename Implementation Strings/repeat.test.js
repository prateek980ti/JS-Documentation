const rep = require('./repeat.js');
const mood1 = "I feel so ";
const mood2 = "Hapi";

test('repeat', () => {
    expect(rep(mood1,mood2,3)).toBe("I feel so HapiHapiHapi");
});