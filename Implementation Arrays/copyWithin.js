
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

let arr= [1,2,3,4,5];
const cw = (arr, target, start, end = arr.length) => {
    let result = [...arr];

    for (let i = 0; i < end - start; i++) {
        // if (target + i < result.length && start + i < arr.length) {
            result[target + i] = arr[start + i];
        // }
    }

    return result;
};

// console.log(cw(arr,0,3));



console.log(cw(arr,0,3,4));


module.exports=cw;



