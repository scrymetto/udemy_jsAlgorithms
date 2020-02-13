function capitalizeFirst(arr) {
    if(arr.length >= 1) {
        let newArray = [];
        let newWord = arr[0][0].toUpperCase() + arr[0].slice(1);
        newArray.push(newWord);
        newArray = newArray.concat(capitalizeFirst(arr.slice(1)));
        return newArray
    } else return []
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana'])