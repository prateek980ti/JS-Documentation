const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1)

const dble=(x)=>{
    return x*2;
}

mapp=(arr,func)=>{   
    for(let i in arr){
        arr[i]=func(arr[i]);
    }    
    console.log(arr);
    return arr;
}
mapp(array1,dble);


module.exports = mapp;
