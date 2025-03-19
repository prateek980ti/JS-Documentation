const str1 = "My name is khan";
// console.log(str1.includes("khan"));

const x = "khan";

includeWord = (str, x) =>{
    let flag=0;
    let y = str.split(" ");

    for(let i of y){
        if(i==x){
            flag=flag+1;
        }
    }
    console.log(flag >= 1 ? "true" : "false");
}
    
includeWord(str1, x);