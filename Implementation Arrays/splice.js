const arr= ["a", "b", "c", "d", "e", "f", "g", "h"];
arr.splice(1,3,"prateek", "gfd","gsfdgfds", "dsds");
console.log(arr);


const spliceee=(arr,start, deleteCount, ...items)=>{
    let newarr=[];
    for(let i=0;i<start;i++){
        newarr.push(arr[i]);
    }

    for(let i of items){
        newarr.push(i);
    }

    for(let i=start+deleteCount;i<arr.length;i++){
        newarr.push(arr[i]);
    }

    arr.length=0;

    for(let i of newarr){
        arr.push(i);
    }

}



// spliceee(arr,-1,3,"prateek", "gfd","gsfdgfds", "dsds");
console.log(arr);