const mood = "      I am very happy because I am     rich.          ";
console.log(mood.trimEnd());


ttt=(string)=>{

    let arr = string.split(" ");
    // console.log(arr);
    
    for(let i of arr){
        if(arr[arr.length-1]==''){ 
            arr.pop();
        }
    }
    console.log(arr.join(" "));
}

ttt(mood);