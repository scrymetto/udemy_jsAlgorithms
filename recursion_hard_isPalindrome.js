function isPalindrome(str) {
    if (str[0]!==str[str.length-1]) return false;
    if (str.length===1) return true;
    str = str.slice(1, str.length-1);
    return isPalindrome(str)
}

console.log(isPalindrome('tacocat'));