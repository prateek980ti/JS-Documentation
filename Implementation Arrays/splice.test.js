const spliceee=  require("./splice");
const arr= ["a", "b", "c", "d", "e", "f", "g", "h"];
const arr2= ["a", "b", "c", "d", "e", "f", "g", "h"];

test ('splice', () => {
    expect(spliceee(arr,-1,3,"prateek", "gfd","gsfdgfds", "dsds")).toEqual(["a", "b", "c", "d", "e", "f", "g", "prateek", "gfd","gsfdgfds", "dsds"]);
    expect(spliceee(arr2,-1,3,"prateek", "gfd","gsfdgfds", "dsds")).toEqual(["a", "b", "c", "d", "e", "f", "g", "prateek", "gfd","gsfdgfds", "dsds"]);
});