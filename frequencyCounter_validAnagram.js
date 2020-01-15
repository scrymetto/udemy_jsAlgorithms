function returnObj (str) {
    let obj = {};
    for (let letter of str) {
        obj[letter] = obj[letter]+1||1;
    }
    return obj;
}

function validAnagram(str1, str2){
    if (str1.length!==str2.length) {return false}
    const objStr1 = returnObj(str1);
    const objStr2 = returnObj(str2);
    for (let letter in objStr1) {
        if (!objStr2[letter]){return false}
        if(objStr1[letter]!==objStr2[letter]){return false}
    }
    return true
}