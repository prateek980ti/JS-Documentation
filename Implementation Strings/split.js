const mood = "I am very happy because I am rich.";
// let x = mood.split(" ");
// // console.log(x[0]); 
// // console.log(x[7]); 

const spplit = (string, operator = " ") =>{
    let result = [];
    let temp = "";

    for (let i = 0; i < string.length; i++){
        if (string[i] === operator) {
            result.push(temp);
            temp = "";
        } else {
            temp += string[i];
        }
    }
    if (temp){
        result.push(temp);
    }

    return result;
};

console.log(spplit(mood, " "));