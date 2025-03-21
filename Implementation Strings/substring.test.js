const sstr = require('./substring.js');
const mood = "I am very happy because I am rich.";
let x=1;
let y = 10;

test ('substring', () => {    
    expect(sstr(mood,x,y)).toBe(" am very ");    
});