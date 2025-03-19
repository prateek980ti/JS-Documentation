const beasts = ["alu", "balu", "calu", "dalu", "malu"];
console.log(beasts.join(""));


sq= (arr)=>{
    let result = "";

    for(let i of arr){
        result += i;
        }
    return result;
}

console.log(sq(beasts));