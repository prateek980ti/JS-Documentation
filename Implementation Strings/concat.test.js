const concattt = require('./concat');

test('concatenation', () => {
  expect(concattt(" ","hello","dost", "mere")).toBe("hello dost mere");
  expect(concattt("*","hello","dost", "mere")).toBe("hello*dost*mere");
});


// concattt(" ","hello","dost", "mere");
// concattt("*","hello","dost", "mere");