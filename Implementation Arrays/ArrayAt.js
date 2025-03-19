const array = [5, 12, 8, 130, 44];
console.log(array.at(3));


let index = 3;

for(let i=0;i<array.length;i++){
    if(i==index){
        console.log(array[i]);
    }
}