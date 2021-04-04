const array = [6, 5, 7, 9, 45, 0];
const array2 = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function pivot(array, fn, start = 0, end = array.length - 1) {
  let pivot = array[0];
  let pivotIndex = 0;
  let changingElement = array[pivotIndex + 1];
  for (let i = pivotIndex + 1; i < array.length; i++) {
    if (typeof fn === 'function') {
      if( fn(array[i], pivot) <= 0 ) {
        array[pivotIndex + 1] = array[i];
        array[i] = changingElement;
        pivotIndex++;
        changingElement = array[pivotIndex + 1]
      }
    } else if (array[i] < pivot) {
      array[pivotIndex + 1] = array[i];
      array[i] = changingElement;
      pivotIndex++;
      changingElement = array[pivotIndex + 1]
    }
  }
  changingElement = array[pivotIndex];
  array[pivotIndex] = pivot;
  array[0] = changingElement;
  return pivotIndex
}

function strLength (a, b) {
  return a.length - b.length
}

console.log(pivot(array));
console.log(array);
console.log(pivot(array2, strLength));
console.log(array2)