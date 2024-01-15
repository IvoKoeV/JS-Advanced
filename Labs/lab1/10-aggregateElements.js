function aggregateEl(arr){
    let sum = arr.reduce((acc, value) => acc + value, 0);
    let inverseSum = arr.reduce((sum, value) => sum + 1 / value, 0); 
    let concat = arr.reduce((acc,value) => acc + "" +value)  ;
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);

}
aggregateEl([1, 2, 3]);
console.log('---------');
aggregateEl([2, 4, 8, 16]);