const array1 = [1, 2, 3];

console.log(array1.includes(2));



sq= (arr, int)=>{

    for(let i of arr){
        if(i==int){
            return true;
        }
    }
    return false;
}

console.log(sq(array1, 2));
console.log(sq(array1, 10));