function sortedFrequency(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    if (arr[start] > num) return 0;
    if (arr[end] < num) return 0;
    if (arr[start] === num && arr[end] === num) return arr.length;
    let middle;
    while (start<end){
        console.log(start, end)
        middle = Math.ceil((end-start)/2+start);
        if (arr[middle]===num) break;
        if (arr[middle]>num){
            end=middle
        } else start = middle;
        middle=null
    }
    console.log('middle')
    console.log(middle)
}

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 4));
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 0));
// console.log(sortedFrequency([1, 1, 1], 1));
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3], 2));
console.log(sortedFrequency([1, 1, 2, 3, 3, 4, 4], 2));
console.log(sortedFrequency([1, 1, 1, 3, 3, 4, 4], 2));
