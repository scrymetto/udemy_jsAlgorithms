function getDigit(num, i) {
  return Math.floor((num % Math.pow(10, i + 1)) / Math.pow(10, i))
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1
}

function mostDigits(nums) {
  let maxLength = 0;
  nums.forEach(num => {
    const length = digitCount(num);
    if (length > maxLength) maxLength = length
  })
  return maxLength
}

function radixSort(nums) {
  const loopCount = mostDigits(nums);
  let result = [...nums]
  for (let i = 0; i < loopCount; i++) {
    const tempArray = [];
    result.forEach((num) => {
      const digit = getDigit(num, i);
      if (!tempArray[digit]) tempArray[digit] = [num]
      else tempArray[digit].push(num)
    })
    const newArray = [];
    tempArray.forEach(num => {
      if (num) {
        newArray.push(...num)
      }
    })
    result = [...newArray]
    // solution from the course
    // result = [].concat(...tempArray).filter(num => !!num)
  }
  return result;
}

console.log(radixSort([123, 3, 4319, 14, 149]))