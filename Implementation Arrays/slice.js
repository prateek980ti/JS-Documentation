const arr= [1,2,3,4,5];
console.log(arr.slice(2,4));

sss = (arr,x,y)=>{
    let result =[];

    for(let i=x;i<y;i++){
        result.push(arr[i]);
    }
    console.log(result);
}

sss(arr,2,4);