const square = (x)=> {return x<20;}

const arr=[1,2,3,32]
const arr2=[1,2,3,4]

console.log(arr.every(square));
console.log(arr2.every(square));


everyy = (arr, func)=>{

    let result= 0;
    for(let i in arr){
        if(!func(arr[i])){
            result+= 1;
            break;
        }
    }
    console.log((result>0)?false:true);
}

everyy(arr, square);
everyy(arr2, square);