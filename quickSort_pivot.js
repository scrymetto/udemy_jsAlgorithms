const array = [6, 5, 7, 9, 45, 0];
const array2 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let pivotIndex = start;
  let changingElement = arr[pivotIndex + 1];
  for (let i = pivotIndex + 1; i <= end; i++) {
    if (typeof comparator === 'function') {
      if( comparator(arr[i], pivot) < 0 ) {
        arr[pivotIndex + 1] = arr[i];
        arr[i] = changingElement;
        pivotIndex++;
        changingElement = arr[pivotIndex + 1]
      }
    } else if (arr[i] < pivot) {
      arr[pivotIndex + 1] = arr[i];
      arr[i] = changingElement;
      pivotIndex++;
      changingElement = arr[pivotIndex + 1]
    }
  }
  changingElement = arr[pivotIndex];
  arr[pivotIndex] = pivot;
  arr[start] = changingElement;
  return pivotIndex
}

function strLength (a, b) {
  return a.length - b.length
}

console.log(pivot(array));
console.log(array);
console.log(pivot(array2, strLength));
console.log(array2)