const l = require('./length');
const x = new String("Hello world");

test('length', () => {
    expect(l(x)).toBe(11);
    expect(l("dost")).toBe(4);
});