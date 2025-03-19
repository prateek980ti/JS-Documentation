const x = new String("Hello world");
// console.log(x.length);
 
let count = 0;
for(let val of x){
    count++;
}
console.log(count);