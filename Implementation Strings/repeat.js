const mood1 = "I feel so ";
const mood2 = "Hapi";

console.log(`I feel so ${mood2.repeat(3)}`);

rep = (str1,str2,int)=>{
    let string3 = str1;
    for(let i=0;i<int;i++){
        string3 = string3 + str2;
    }
    console.log(string3);
    return string3;
}

rep(mood1,mood2,3);

module.exports = rep