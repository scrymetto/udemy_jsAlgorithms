function minSubArrayLen(arr, value) {
    let curSum=0;
    for (let i = 0; i<arr.length; i++){
        if (arr[i]>=value){return 1}
        curSum +=arr[i]
    }
    if(curSum<value){return 0}
}