function extractIncreasingSubsetFromArray(arr){
    let maxNumber = arr[0];
    const rez = [];
    let filteredArray = arr.forEach((x,)=>{
        if(x >= maxNumber){
            maxNumber = x;
            rez.push(maxNumber);
        }
    });
    return rez;
}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsetFromArray([1, 2, 3, 4]);
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]);