function merge(arr1, arr2, fn) {
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

function mergeSort(array, fn) {
  if (array.length <= 1) return array
  const middle = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, middle), fn);
  const right = mergeSort(array.slice(middle, array.length), fn)
  return merge(left, right, fn)
}
console.log(mergeSort([4, 20, 12, 10, 7, 9]))
console.log(mergeSort([0, -10, 7, 4, 8]))
console.log(mergeSort([1, 2, 3]))
console.log(mergeSort([]))

function comparator(a, b) {
  return b.age - a.age
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
]

console.log(mergeSort(kittyData, comparator))
