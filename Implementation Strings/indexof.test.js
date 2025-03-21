const iof = require('./indexof');

const mood = "My name is khan";
const y = "khan";

test('concatenation', () => {
  expect(iof(mood, y)).toBe(11);
});

