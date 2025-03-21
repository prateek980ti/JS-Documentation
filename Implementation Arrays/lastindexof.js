const arr= [1,2,2,,2,2];
console.log(arr.lastIndexOf(2));



sq= (arr,n)=>{

    for(let i = arr.length-1; i>=0; i--){
        if(arr[i]==n){
            return i;
        }
    }
    return undefined;
}

console.log(sq(arr,2));


module.exports = sq;