const arr= [1,2,2,,2,2];
console.log(arr.lastIndexOf(2));



sq= (arr)=>{

    for(let i = arr.length-1; i>=0; i--){
        if(arr[i]==2){
            return i;
        }
    }
    return undefined;
}

console.log(sq(arr));