function someRecursive(arr, func) {
    let result = false;

    function helper(array) {
        if (array.length === 0) return;
        if (func(array[0])) {
            result = true;
            return;
        }
        array.splice(0, 1);
        return helper(array)
    }
    helper(arr);
    return result
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4, 6, 8, 11], val => val > 10)); // true