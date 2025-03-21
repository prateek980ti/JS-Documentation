const sq= require('./indexof.js');
const beasts = ["alu", "balu", "calu", "dalu", "malu"];

test ('indexof', () => {
    expect(sq(beasts, "malu")).toBe(4);
    expect(sq(beasts, "malku")).toBe(-1);
});