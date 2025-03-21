const str1 = "My name is khan";
const str2 = "khan";

// console.log(str1.endsWith("khan"));


ew =(str1,str2)=>{

    str3=str1.split("").reverse();
    str4=str2.split("").reverse();
    // console.log(str2.valueOf());
    // console.log(str1.length);
    let flag  = 0;
    
    for(let i=0;i<str2.length;i++){
        if(str4[i]==str3[i]){
            flag = 1;
        }
        else{
            flag = 0;
        }
    }
    
    if(flag == 1){
        // console.log("true");
        return true;
    }
    else{
        // console.log("false");
        return false;
    }
}


module.exports = ew
console.log(ew(str1,str2));