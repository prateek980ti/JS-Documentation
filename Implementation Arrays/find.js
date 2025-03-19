const ffff = (x)=> {return x>70;}


const arr = [5, 12, 8, 130, 44, 77];
const a = arr.find((x) => x > 70);
console.log(a);


sq= (arr, func)=>{

    for(let i in arr){
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}

console.log(sq(arr, ffff));
// console.log(sq(arr2, square));