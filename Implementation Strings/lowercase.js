const mood = "I am very happy because I am rich.";
// console.log(mood.toLowerCase());

let result2 = ""
for (let x of mood) {
    
    // console.log(x);
    if(x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90){
        let result = x.charCodeAt(0) + 32 ;
        result2 = result2 + String.fromCharCode(result);
    }
    else {
        result2 = result2 + x;
    }
 // result = charCodeAt(element) + 32;
    // console.log(result);
}
console.log(result2);
// console.log(mood);