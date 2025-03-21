const mood = "I am very happy happy happy";
// let x = mood.search("very");
// console.log(x);


let y = "very";
srch=(string, find)=>{

    let arr = string.split(""); 
    for (let i in arr) {
        if (string.substring(i, parseInt(i) + find.length) === find) {
            console.log(i);
            break; 
        } 
    }
}

srch(mood,y);
    