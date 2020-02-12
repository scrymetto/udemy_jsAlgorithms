function someRecursive(arr, func) {
    let result = false;
    if (arr.length === 0) return false;
    if (func(arr[0])){
        result=true
    }
        return result !== someRecursive(arr.splice(0, 1), func)
}

console.log(someRecursive([4,6,8, 11], val => val > 10))