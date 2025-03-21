const ss = require('./startswith');
const mood = "I am very happy because I am rich.";
const x = "I";

test ('startswith', () => {    
    expect(ss(mood,x)).toBe(true);    
});