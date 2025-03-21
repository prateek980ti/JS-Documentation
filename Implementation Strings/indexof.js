const mood = "My name is khan";
console.log(mood.indexOf("khan"));

const y = "khan";

iof=(string, y)=>{

    let arr = mood.split(""); 
    for (let i in arr) {
        if (mood.substring(i, parseInt(i) + y.length) === y) {
            console.log(i);
            break; 
        } 
    }
    
}

iof(mood, y);