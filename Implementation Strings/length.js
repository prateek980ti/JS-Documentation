const x = new String("Hello world");
// console.log(x.length);
 

const l = (x)=>{

    let count = 0;
    for(let val of x){
        count++;
    }
    console.log(count);
    return count;
}

l(x);

module.exports=l