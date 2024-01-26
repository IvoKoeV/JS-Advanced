function calorieObject(data){
    const products = {};

    for(let i = 0;i<data.length;i+=2){
        products[data[i]] = Number(data[i+1]);
    }

    console.log(products)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);