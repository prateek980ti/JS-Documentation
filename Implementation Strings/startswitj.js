const mood = "I am very happy because I am rich.";
const x = "I";
console.log(mood.startsWith("I"));

ss=(string,x)=>{

    let y = string.split(" ");
    if(y[0]==x){
        console.log("true");
    }
    else{
        console.log("false");
    }
}


ss(mood,x);