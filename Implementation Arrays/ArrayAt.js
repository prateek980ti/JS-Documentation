const array = [5, 12, 8, 130, 44];
console.log(array.at(-3));


let index = -3;
const att=(index)=>{
    if(index<0){
        index = index+array.length;
    }
    for(let i=0;i<array.length;i++){
        if(i==index){
            console.log(array[i]);
        }
    }
}


att(index);