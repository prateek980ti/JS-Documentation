let x = "";
const str1 = "Hello";
const str2 = "Dost";

console.log(str1.concat(" ", str2));
console.log(str1.concat("*", str2));


for(let a of str1){
    x = x + a;
}
for(let a of str2){
    x = x + a;
}

console.log(x.valueOf());