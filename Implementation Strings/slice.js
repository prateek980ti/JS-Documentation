const mood = "I am very happy because I am rich.";
// let x = mood.slice(5);
let z = mood.slice(5,15);
// console.log(x); 
console.log(z); 


let x=5;
let y = 15;
let result = "";
let arr = mood.split("");
for(let i = x;i<y;i++){
    result+=arr[i];
}
console.log(result);