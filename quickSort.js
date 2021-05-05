function findPivot(arr, comparator, start = 0, end = arr.length - 1) {
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

function quickSort (arr) {

}