function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    while (start<end){
        let current = Math.floor((start+end)/2);
        if(arr[current]===target){return true}
        if(arr[current]<target){
            start=current+1;
        } else {
            end = current-1
        }
    }
    return false
}

function averagePair(arr, average) {
    if(arr.length<=1){return false}
    const sum = average*2;
    for (let i = 0; i<arr.length; i++){
        const target = sum-arr[i];
        if(binarySearch(arr, target)){return true}
    }
    return false
}

console.log(averagePair([1,2,3],2.5));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));