const arr= [9,6,4,3,2];
const arr2= [1,2,3,4,5,6,7,8,9];
arr.sort();
// console.log(arr);

const bubble= (arr)=>{

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
    return arr;
}

bubble(arr);
bubble(arr2);


module.exports = bubble;