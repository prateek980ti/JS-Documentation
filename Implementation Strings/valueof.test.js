const vof = require('./valuof.js')
const x = new String("Hello world");

test ('valuof', () => {    
    expect(vof(x)).toBe("Hello world ");    
});