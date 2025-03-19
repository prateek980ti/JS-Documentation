const mood = "      I am very happy because I am     rich.      ";
console.log(mood.trim());

let arr = mood.split(" ");
// console.log(arr);

for(let i of arr){
    if(arr[0]==''){
        arr.shift();
    }
    if(arr[arr.length-1]==''){ 
        arr.pop();
    }
}
console.log(arr.join(" "));