function countZeroes(arr) {
    if (arr[arr.length - 1] !== 0) return 0;
    if (arr[0] === 0) return arr.length;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let middle = Math.ceil((end - start) / 2 + start);
        if (arr[middle] === 0 && arr[middle - 1] !== 0) return arr.length - middle;
        if (arr[middle]===0) {
            end = middle;
        } else start = middle;
    }
}

console.log(countZeroes([1, 1, 1, 0, 0, 0, 0]));
console.log(countZeroes([0, 0, 0, 0]));
console.log(countZeroes([1, 1, 1, 1]));
