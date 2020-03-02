function insertionSort(arr, func) {
    let curVal;
    for (let i = 1; i < arr.length; i++) {
        curVal = arr[i];
        let j = i - 1;
        if (typeof func === 'function') {
            for (j; j >= 0 && func(arr[j], curVal) > 0; j--) {
                arr[j + 1] = arr[j];
            }
            arr[j + 1] = curVal;
        } else {
            for (j; j >= 0 && arr[j] > curVal; j--) {
                if (arr[j] > curVal) {
                    arr[j + 1] = arr[j];
                }
            }
            arr[j + 1] = curVal;
        }
    }
    return arr
}

console.log(insertionSort([5, 6, 7, 4, 90, 43, 56]));

const kitties = ['LilBup', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    }
    return 0
}

console.log(insertionSort(kitties, strComp));
