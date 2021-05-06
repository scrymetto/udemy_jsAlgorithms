function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  let pivotEl = arr[start];
  let pivotIndex = start;
  let changingElement = arr[pivotIndex + 1];
  for (let i = pivotIndex + 1; i <= end; i++) {
    if (typeof comparator === 'function') {
      if (comparator(arr[i], pivotEl) < 0) {
        arr[pivotIndex + 1] = arr[i];
        arr[i] = changingElement;
        pivotIndex++;
        changingElement = arr[pivotIndex + 1]
      }
    } else if (arr[i] < pivotEl) {
      arr[pivotIndex + 1] = arr[i];
      arr[i] = changingElement;
      pivotIndex++;
      changingElement = arr[pivotIndex + 1]
    }
  }
  changingElement = arr[pivotIndex];
  arr[pivotIndex] = pivotEl;
  arr[start] = changingElement;
  return pivotIndex
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInd = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotInd - 1);
    quickSort(arr, comparator,pivotInd + 1, right);
  }
  return arr
}

const kittyData = [
  {
    name: 'LilBub',
    age: 7
  },
  {
    name: 'Garfield',
    age: 40
  },
  {
    name: 'Heathcliff',
    age: 45
  },
  {
    name: 'Blue',
    age: 1
  },
  {
    name: 'Grumpy',
    age: 6
  },
];

function comparator(a, b) {
  return b.age - a.age
}

console.log(quickSort([4, 3, 34, 2, 56, 5, 7, 1]))
console.log(quickSort(kittyData, comparator))