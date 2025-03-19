const mood = "I am Salman Khan. My father is Monu Khan Sahab";
console.log(mood.lastIndexOf("Khan"));


const y = "Khan";


let arr = mood.split(""); 
for (let i=arr.length-1; i>=0; i--) {
    if (mood.substring(i, parseInt(i) + y.length) === y) {
        console.log(i);
        break; 
    } 
}
