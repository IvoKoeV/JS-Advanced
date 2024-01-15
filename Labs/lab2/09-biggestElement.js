function biggestElement(arr){
   
        if (arr.length === 0 || arr[0].length === 0) {
            console.log("Matrix is empty.");
            return undefined;
          }
        
          let maxElement = arr[0][0];
        
          for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {
              if (arr[row][col] > maxElement) {
                maxElement = arr[row][col];
              }
            }
          }
        
          return maxElement;
    }
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);