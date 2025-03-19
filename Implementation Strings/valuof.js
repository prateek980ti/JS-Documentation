const x = new String("Hello world");
// console.log(x.valueOf()); // 'Hello world'
// console.log(x); // 'Hello world'
let result = " "
for(let a of x){
    result = x + " ";
}

console.log(result);