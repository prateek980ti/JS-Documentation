const square = (x)=> {return x<20;}

const arr=[1,2,3,32]
const arr2=[1,2,3,4]

// console.log(arr.filter(square));
// console.log(arr2.filter(square));

sq= (arr, func)=>{

    let result= [];
    for(let i in arr){
        if(func(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(sq(arr, square));
console.log(sq(arr2, square));


module.exports= sq;