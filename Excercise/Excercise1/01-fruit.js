function fruit(fruit,weigth,prKilo){
    let weithInKilos = weigth / 1000;
    let priceForFruit = weithInKilos * prKilo;
    console.log(`I need $${priceForFruit.toFixed(2)} to buy ${weithInKilos.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);