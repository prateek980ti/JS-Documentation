const mood = "      I am very happy because I am     rich.      ";
console.log(mood.trim());

// console.log(arr);

trimmm=(string)=>{
    let arr = string.split(" ");

    
    for(let i of arr){
        if(arr[0]==''){
            arr.shift();
        }
        if(arr[arr.length-1]==''){ 
            arr.pop();
        }
    }
    console.log(arr.join(" "));
}


trimmm(mood);