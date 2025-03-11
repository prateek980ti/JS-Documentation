const arr1 = [1, 2, 3, 4,5];
const result = arr1.flatMap((num) => [num, num*10]);
console.log(result);