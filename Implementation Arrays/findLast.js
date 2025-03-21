const ffff = (x)=> {return x>70;}



const arr = [5, 12, 8, 130, 290 , 44];


const a = arr.findLast((x) => x > 70);
console.log(a);
// 290


sq= (arr, func)=>{

    for(let i = arr.length-1; i>=0; i--){
        if(func(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}

console.log(sq(arr, ffff));


module.exports = sq;

