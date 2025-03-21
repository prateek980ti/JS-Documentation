const mood = "I am very happy because I am rich.";
// console.log(mood.substring(1));
console.log(mood.substring(1,10));

let x=1;
let y = 10;

const sstr=(string,x,y)=>{
    
    let result = "";
    let arr = string.split("");

    let len = arr.length;
    if (x < 0) x = len + x;
    if (y < 0) y = len + y;

    x = Math.max(0, x);
    y = Math.min(len, y);


    for(let i = x;i<y;i++){
        result+=arr[i];
    }
    console.log(result);
    return result ;
}

sstr(mood,x,y);


module.exports = sstr