function isSubsequence(str1, str2){
    let j=0;
    for (let i = 0; i<str2.length-1; i++){
        if (str2[i]===str1[j]){j+=1}
        if (j===(str1.length-1)){return true}
    }
    return false
}

console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('abc', 'abracadabra'));