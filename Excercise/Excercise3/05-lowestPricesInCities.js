function lowestPricesInCities(data){
    let result = {};

    for(let product of data){
        let [townName,productName,productPrice] = product.split(' | ');
        productPrice = Number(productPrice);

        if(!result.hasOwnProperty(productName)){
            result[productName]= {
                townName,
                productPrice 
            }
        }else if(result[productName].productPrice > productPrice){
            result[productName].townName = townName;
            result[productName].productPrice=productPrice;
        }
    }

    for(let [product, townInfo] of Object.entries(result)){
        console.log(`${product} -> ${townInfo.productPrice} (${townInfo.townName})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);

