function greatestCommonDivisor(a,b){
    if(b>a){
        [a,b] = [b,a];
    }
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    console.log(a);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);