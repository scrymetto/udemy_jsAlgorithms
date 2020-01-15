function sameFrequency(number1, number2){
    const str1 = number1+'';
    const str2 = number2+'';
    if (str1.length!==str2.length){return false}
    let obj = {};
    for (let num of str1){
        obj[num] = obj[num]+1||1;
    }
    for(let num of str2){
        if (!obj[num]){return false}
        else {
            obj[num]-=1;
        }
    }
    return true;
}
