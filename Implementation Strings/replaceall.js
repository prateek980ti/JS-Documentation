const mood = "I am very happy happy happy  ";
// let x = mood.replaceAll("happy", "sad");


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
}

replacee(mood, a , b);
