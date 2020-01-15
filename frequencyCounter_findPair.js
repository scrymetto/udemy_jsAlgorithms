function findPair(arr, diff) {
    let obj = {};
    let result = false;
    arr.forEach(number => {
        obj[number] = obj[number]+1||1
    });
    arr.forEach(number => {
        if(obj[number+diff]) {result=true}
    });
    return result
}