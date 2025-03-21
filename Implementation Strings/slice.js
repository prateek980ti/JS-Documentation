const mood = "I am very happy because I am rich.";
// let x = mood.slice(5);
console.log(mood.slice(5,15));
// console.log(x); 


let x=5;
let y = 15;

// sliceee=(string,x,y)=>{
    
//     let result = "";
//     let arr = string.split("");
//     for(let i = x;i<y;i++){
//         result+=arr[i];
//     }
//     console.log(result);
// }

// sliceee(mood,x,y);

const sliceee = (string, start, end = string.length) => {
    let result = "";
    let length = string.length;

    if (start < 0) start = length + start;
    if (end < 0) end = length + end;

    start = Math.max(0, start); // neagtive value aaye toh 0 kardo
    end = Math.min(length, end); // end se badi aaye toh .length kardo

    for (let i = start; i < end; i++) {
        result += string[i];
    }
    console.log(result);
};


sliceee(mood, x, y);
sliceee(mood, -50, -1);
sliceee(mood,-13);