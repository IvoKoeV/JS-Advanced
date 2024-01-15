function processOddPositions(inputArray){
    let rez = [];
    for(let i = 0; i < inputArray.length;i++){
        if(i % 2 !== 0 ){
            inputArray[i] *= 2;
            rez.push(inputArray[i]);
        }
    }
    rez.reverse();
   return rez.join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
processOddPositions([3, 0, 10, 4, 7, 3]);