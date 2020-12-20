function mergeArrays(arr1, arr2, fn) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (typeof fn === 'function') {
            if (fn(arr1[i], arr2[j]) < 0) {
                result.push(arr1[i]);
                i++
            } else {
                result.push(arr2[j]);
                j++
            }
            console.log(result)
        } else {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++
            } else {
                result.push(arr2[j]);
                j++
            }
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

function comparator(str1, str2) {
    return str1.length - str2.length
}

const first = ['Bob', 'Ethel', 'Christine'];
const last = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];

// console.log(mergeArrays([1, 10, 50], [2, 14, 99, 100]));
// console.log(mergeArrays([], [2, 14, 99, 100]));
// console.log(mergeArrays([100], [2, 14, 99]));
console.log(mergeArrays(first, last, comparator));

function comparator2(a, b) {
    return b.age - a.age
}

const kittyData = [

    {
        name: 'Heathcliff',
        age: 45
    },
    {
        name: 'Garfield',
        age: 40
    },
    {
        name: 'LilBub',
        age: 7
    }]
const kittyData2 = [
    {
        name: 'Grumpy',
        age: 6
    },
    {
        name: 'Blue',
        age: 1
    }
]

console.log(mergeArrays(kittyData, kittyData2, comparator2))