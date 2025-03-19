const array1 = [1,2,3,4,5];
const array2 = [534,6,34,314,634];
const array3 = array1.concat(array2);
console.log(array3);

let x =[];
for(let i in array1){
    x.push(array1[i]);
}

for(let i in array2){
    x.push(array2[i]);
}

console.log(x);