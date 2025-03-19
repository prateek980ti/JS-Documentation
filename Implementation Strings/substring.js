const mood = "I am very happy because I am rich.";
// console.log(mood.substring(1));
console.log(mood.substring(1,10));

let x=1;
let y = 10;
let result = "";
let arr = mood.split("");
for(let i = x;i<y;i++){
    result+=arr[i];
}
console.log(result);