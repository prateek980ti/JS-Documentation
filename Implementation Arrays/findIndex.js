const ffff = (x)=> {return x>70;}

const arr = [5, 12, 8, 130, 44];
// const a = arr.findIndex((x) => x > 70);
// console.log(a);


sq= (arr, func)=>{

    for(let i in arr){
        if(func(arr[i])){
            return parseInt(i);
        }
    }
    return undefined;
}

console.log(sq(arr, ffff));


module.exports = sq;