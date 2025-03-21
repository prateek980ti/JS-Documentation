const arr= ["a", "b", "c", "d", "e", "f", "g", "h"];
const arr2= ["a", "b", "c", "d", "e", "f", "g", "h"];
arr.splice(-1,3,"prateek", "gfd","gsfdgfds", "dsds");
console.log(arr);


const spliceee=(arr,start, del, ...items)=>{
    let newarr=[];

    if(start<0){start=arr.length+start;}
    for(let i=0;i<start;i++){
        newarr.push(arr[i]);
    }

    for(let i of items){
        newarr.push(i);
    }

    for(let i=start+del;i<arr.length;i++){
        newarr.push(arr[i]);
    }

    arr.length=0;

    for(let i of newarr){
        arr.push(i);
    }

    return newarr;

}



spliceee(arr2,-1,3,"prateek", "gfd","gsfdgfds", "dsds");
console.log(arr2);


module.exports = spliceee;