const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];

// console.log(array1.fill(0, 2, 4));
// console.log(array2.fill(1, 3, 4));


// array2.splice(2,2,0,0)
// console.log(array1);


filll = (arr, val, start, end = arr.length) => {
    let result = [...arr];
    let j = 0;
    for (let i = start; i < end; i++) {
        result[start + j] = val;
        j++;
    }

    return result;
}

// maza aagaya

arr3 = filll(array1, 0, 2, 4);
arr4=filll(array2, 1, 3, 4);
console.log(arr3);
console.log(arr4);

module.exports= filll;
