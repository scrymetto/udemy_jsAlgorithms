function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== num && start < end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] > num) {
            end = middle - 1
        } else start = middle + 1;
    }
    if (arr[middle])
        return arr[middle] === num ? middle : -1;
}

function sortedFrequency(arr, num) {
    if (arr[0] > num) return -1;
    if (arr[arr.length - 1] < num) return -1;
    if (arr[0] === num && arr[arr.length - 1] === num) return arr.length;
    let first = -1;
    let last = -1;
    let middle = -1;
    if (arr[0] === num) first = 0;
    if (arr[arr.length - 1] === num) last = arr.length - 1;
    middle = binarySearch(arr, num);
    if (middle < 0 && first < 0 && last < 0) return -1;
    if (middle < 0 && first >= 0 && last < 0) return 1;
    if (middle < 0 && first < 0 && last >= 0) return 1;
    if (middle >= 0 && last <= 0) {
        let i = middle;
        while (arr[i] === num && i < arr.length) {
            last = i;
            i++
        }
    }
    if (middle && first < 0) {
        let i = middle;
        while (arr[i] === num && i >= 0) {
            first = i;
            i--
        }
    }
    return last - first + 1
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 4));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 0));
// console.log(sortedFrequency([1, 1, 1], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3, 4], 4));
console.log(sortedFrequency([1, 1, 1, 2, 3, 3, 4, 4], 4));
console.log(sortedFrequency([1, 3, 3, 4, 4], 1));
