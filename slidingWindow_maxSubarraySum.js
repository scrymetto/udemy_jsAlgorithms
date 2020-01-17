function maxSubarraySum(arr, length) {
    if (arr.length < length) {
        return null
    }
    let maxSum = 0;
    let prevSum = 0;
    for (let i = 0; i < length; i++) {
        prevSum += arr[i]
    }
    for (let i = 1; i <= arr.length - length; i++) {
        let curSum = prevSum - arr[i - 1] + arr[(i - 1) + length];
        if (curSum > maxSum) {
            maxSum = curSum
        }
        prevSum = curSum;
    }
    return maxSum
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([100, 200, 300, 400], 2));