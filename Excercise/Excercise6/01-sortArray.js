function sortArrays(array, operation){
    return array.sort((a,b) => operation === 'asc' ? a - b : b - a);
}

console.log(sortArrays([14, 7, 17, 6, 8], 'asc'));
console.log(sortArrays([14, 7, 17, 6, 8], 'desc'));