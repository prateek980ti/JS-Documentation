const includeWord = require('./includes');


const str1 = "My name is khan";
const x = "khan";
const y = "Ram";

test('includes', () => {
  expect(includeWord(str1, x)).toBe(true);
  expect(includeWord(str1, y)).toBe(false);
});
