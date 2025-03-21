const mood = "      I am very happy because I am     rich.          ";

console.log(mood.trimStart());


tt=(string)=>{
    
    let arr = mood.split(" ");
    // console.log(arr);
    
    for(let i of arr){
        if(arr[0]==''){
            arr.shift();
        }
        
    }
    console.log(arr.join(" "));
}

tt(mood);