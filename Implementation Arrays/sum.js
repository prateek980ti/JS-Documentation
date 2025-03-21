some=(x) => {return x % 2 === 0};
const arr = [1, 2, 3, 4];
const arr2 = [5, 7, 3, 11];



console.log(arr.some((x) => x % 2 === 0));
console.log(arr2.some((x) => x % 2 === 0));



som = (arr, func)=>{

    let flag= 0;
    for(let i in arr){
        if(func(arr[i])){
           flag+= 1;
            break;
        }
    }
    console.log((flag>0)?true:false);
    return (flag>0)?true:false;
}

som(arr, some);
som(arr2, some);


module.exports = som;