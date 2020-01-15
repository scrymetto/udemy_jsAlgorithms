function areThereDuplicates(...args) {
    if (args.length<=1){return false}
    let obj = {};
    for (let i=0;i<args.length;i++){
        if(obj[args[i]]){return true}
        else {obj[args[i]]=1}
    }
    return false;
}