function sumFirstLast(arr){
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    let sum = firstEl + lastEl;
    console.log(sum);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);