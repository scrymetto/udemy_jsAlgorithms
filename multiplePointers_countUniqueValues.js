function countUniqueValues(arr){
    let i = arr[0];
    if(!i) return 0;
    let result = 1;
    arr.forEach((number)=>{
        if(number!==i){
            i=number;
            result++;
        }
    });
    return result;
}