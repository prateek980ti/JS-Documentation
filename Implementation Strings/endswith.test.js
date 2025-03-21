const ew = require('./endswith');
const str1 = "My name is khan";
const str2 = "khan";


test('concatenation', () => {
  expect(ew(str1,str2)).toBe(true);
});
