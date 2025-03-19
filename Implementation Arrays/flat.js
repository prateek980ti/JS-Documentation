const arr= [0, 1, [2, [3, [4, 5]]]];
// console.log(arr.flat());


const flatten=(arr)=>{
    
    let res=[];
    arr.forEach(element => {
        if(Array.isArray(element)){
            res=res.concat(flatten(element));   
        }
        else{
            res.push(element);
        }
    });
    return res;
}

// flatten(arr);

console.log(flatten(arr));

    // console.log(arr);
