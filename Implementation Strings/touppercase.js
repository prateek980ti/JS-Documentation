const mood = "I am very happy because I am rich.";
// console.log(mood.toUpperCase());

let result2 = ""
for (let x of mood) {
    
    // console.log(x);
    if(x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122){
        let result = x.charCodeAt(0) - 32 ;
        result2 = result2 + String.fromCharCode(result);
    }
    else {
        result2 = result2 + x;
    }
}
console.log(result2);