const arr= [9,6,4,3,2];
arr.sort();
// console.log(arr);


for(let i=0;i<arr.length;i++){  
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);