function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        } else {
            result.push(arr2[j]);
            j++
        }
    }
    if (i < arr1.length && j === arr2.length) {
        const rest = arr1.slice(i, arr1.length);
        result = result.concat(rest)
    }
    if (i === arr1.length && j < arr2.length) {
        const rest = arr2.slice(j, arr2.length);
        result = result.concat(rest)
    }

    return result
}

console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeArrays([], [2, 14, 99, 100]));
console.log(mergeArrays([100], [2, 14, 99]));