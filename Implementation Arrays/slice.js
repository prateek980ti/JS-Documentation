const arr= [1,2,3,4,5];
console.log(arr.slice(2,-1));

sss = (arr,x,y)=>{
    
    let result =[];
    if(x<0){
        x=arr.length+x;
    }
    if(y<0){
        y=arr.length+y;
    }

    for(let i=x;i<y;i++){
        result.push(arr[i]);
    }
    console.log(result);
    return result;
}

sss(arr,2,-1);
sss(arr,2,3);


module.exports=sss;