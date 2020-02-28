function swap(arr, fi, si) {
    [arr[fi], arr[si]] = [arr[si], arr[fi]]
}

function selectionSort(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (typeof func === 'function') {
                if (func(arr[j], arr[min]) < 0) min = j
            } else {
                if (arr[j] < arr[min]) min = j
            }
        }
        if (min !== i) {
            swap(arr, i, min)
        }
    }
    return arr
}

console.log(selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));