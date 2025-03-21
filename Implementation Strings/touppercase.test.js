const ul = require('./touppercase');

test('touppercase', () => {
    expect(ul("hello")).toBe("HELLO");
});