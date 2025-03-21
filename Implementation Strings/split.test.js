const spplit= require('./split');
const mood = "I am very happy because I am rich.";

test ('split', () => {
    expect(spplit(mood, " ")).toEqual(["I", "am", "very", "happy", "because", "I", "am", "rich."]);
});