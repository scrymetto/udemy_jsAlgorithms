function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let middle = Math.ceil((end - start) / 2 + start);
        if (arr[middle] !== num) {
            if (num > arr[middle]) {
                start = middle
            } else end = middle
        } else return middle
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));