const str1 = "Hello";
const str2 = "Dost";

// console.log(str1.concat(" ", str2));
// console.log(str1.concat("*", str2));


const concattt=(y,...str)=>{
    let x = "";
    for(let i of str){
        x=x+i;
        if(i!=str[str.length-1]){
            x=x+y;
        }
    }
    // console.log(x.valueOf());
    return x.valueOf();
}

// concattt(" ","hello","dost", "mere");
// concattt("*","hello","dost", "mere");

module.exports = concattt