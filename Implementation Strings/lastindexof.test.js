const liof = require('./lastindexof.js');

const mood = "I am Salman Khan. My father is Monu Khan Sahab";
const y = "Khan";

test("lastindex",()=>{
    expect(liof(mood, y)).toBe(36);
})