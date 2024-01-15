function diagonalSums(matix){
    let main = 0;
    let secondary = 0;

    for(let i = 0; i < matix.length;i++){
        main += matix[i][i];
    }
    for(let i = 0; i < matix.length;i++){
        secondary += matix[i][matix.length - 1 - i];
    }
    console.log(main,secondary);
}
diagonalSums([[20, 40],
    [10, 60]]
   );
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );