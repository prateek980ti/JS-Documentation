const mood = "I am very happy";
// console.log(mood); 
let a = "happy";
let b = "sad";
// let x = mood.replace("happy", "sad");
// console.log(x); 

replacee = (str,str1,str2) => {

    let arr = str.split(" ");
    for(let i in arr){
        if(arr[i]==str1){
            arr[i]=str2;
        }
    }
    // console.log(arr); a
    
    let sentence = arr.join(" ");
    console.log(sentence); 
    return sentence;
}

replacee(mood, a , b);


module.exports = replacee