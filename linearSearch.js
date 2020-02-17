function linearSearch(array, num) {
    for (let i = 0; i<array.length; i++){
        if (array[i]===num) return i
    }
    return -1
}

// function linearSearch(array, num){
//     let result = -1;
//     array.forEach((el, ind) =>{
//         if (el===num) result=ind
//     });
//     return result
// }

