const mood = "I am very happy happy happy";
// let x = mood.search("very");
// console.log(x);


let y = "very";

let arr = mood.split(""); 
for (let i in arr) {
    if (mood.substring(i, parseInt(i) + y.length) === y) {
        console.log(i);
        break; 
    } 
}
