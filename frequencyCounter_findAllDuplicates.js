function findAllDuplicates(arr){
    let obj = {};
    let result = [];
    arr.forEach(number => {
        if(!obj[number]){
            obj[number] = 1
        } else {
            result.push(number);
            obj[number]=false;
        }
    });
    return result
}