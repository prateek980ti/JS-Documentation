const beasts = ["alu", "balu", "calu", "dalu", "malu"];
console.log(beasts.indexOf("malu"));


sq= (arr, string)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]==string){
            return i;
        }
    }
    return -1;
}

console.log(sq(beasts, "malu"));
console.log(sq(beasts, "malku"));


module.exports = sq;