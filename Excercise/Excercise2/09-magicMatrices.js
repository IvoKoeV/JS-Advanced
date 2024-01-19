function magicMatices(matrix){
    const arraySum = arr => arr.reduce((sum, num) => sum + num, 0);

    const rowSums = matrix.map(row => arraySum(row));
    const uniqueRowSums = new Set(rowSums);
    if (uniqueRowSums.size !== 1) {
        return false;
    }

   
    const colSums = matrix[0].map((col, i) => matrix.map(row => row[i]));
    const uniqueColSums = new Set(colSums.map(arraySum));
    if (uniqueColSums.size !== 1) {
        return false;
    }

    
    return true;
}
console.log(magicMatices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));
magicMatices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
