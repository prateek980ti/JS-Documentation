const trimmm = require('./trim');
const mood = "      I am very happy because I am     rich.      ";

test ('trim', () => {    
    expect(trimmm(mood)).toBe("I am very happy because I am     rich.");    
});