function capitalizedWords(array) {
    if (array.length===0) return [];
    let result = [];
    const capitalised = array[0].toUpperCase();
    result.push(capitalised);
    result = result.concat(capitalizedWords(array.slice(1)));
    return result
}

const words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']