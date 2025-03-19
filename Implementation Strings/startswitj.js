const mood = "I am very happy because I am rich.";
const x = "I";
console.log(mood.startsWith("I"));

let y = mood.split(" ");
if(y[0]==x){
    console.log("true");
}
else{
    console.log("false");
}