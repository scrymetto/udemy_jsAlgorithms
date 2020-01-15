function constructNote(message, letters){
    let lettersObj = {};
    for (let letter of letters){
        lettersObj[letter] = lettersObj[letter] +1 || 1;
    }
    for (let letter of message){
        if(!lettersObj[letter]) {return false}
        else {lettersObj[letter]-=1}
    }
    return true;
}