function squareOfStars(size){
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// squareOfStars(1);
squareOfStars(2);
// squareOfStars(5);
// squareOfStars(7);