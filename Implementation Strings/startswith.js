const mood = "I am very happy because I am rich.";
const x = "I";
console.log(mood.startsWith("I"));

ss=(string,x)=>{

    let y = string.split(" ");
    if(y[0]==x){
        console.log("true");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}


ss(mood,x);

module.exports=ss