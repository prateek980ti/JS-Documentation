const tt = require('./trimstart');
const mood = "      I am very happy because I am     rich.";

test ('trimstart', () => {    
    expect(tt(mood)).toBe("I am very happy because I am     rich.");    
});