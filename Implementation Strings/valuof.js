const x = new String("Hello world");
// console.log(x.valueOf()); // 'Hello world'
// console.log(x); // 'Hello world'


vof=(x)=>{
    
    let result = " "
    for(let a of x){
        result = x + " ";
    }
    
    console.log(result);
    return result;
}

vof(x);

module.exports= vof