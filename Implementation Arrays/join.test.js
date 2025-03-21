const sq= require('./join.js');
const beasts = ["alu", "balu", "calu", "dalu", "malu"];

test ('join', () => {
    expect(sq(beasts)).toBe("alubalucaludalumalu");
});