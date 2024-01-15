function biggerHalf(inputArray){
    const sortedArray = inputArray.slice().sort((a, b) => a - b);
    const sliceIndex = Math.ceil(sortedArray.length / 2);
    const secondHalf = sortedArray.slice(sliceIndex);
  
    return secondHalf;
}
console.log(biggerHalf([4, 7, 2, 5]));
biggerHalf([3, 19, 14, 7, 2, 19, 6]);