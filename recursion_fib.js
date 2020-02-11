function fib(number) {
    let sum = 1;
    let arr = [1];
    let helper = arr => {
        if (arr.length === number) return;
        arr.push(arr[arr.length - 1] + (arr[arr.length - 2] || 0));
        return helper(arr)
    };
    helper(arr);
    return arr[number - 1]
}

console.log(fib(4));
console.log(fib(28));

// Solution from course:
// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }