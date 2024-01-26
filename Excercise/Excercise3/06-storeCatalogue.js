function storeCatalogue(storeProducts){
    const orderedList = {};

    for(let product of storeProducts){
        let [productName,productPrice] = product.split(' : ');
        orderedList[productName] = Number(productPrice);
    }
    let sortedList = Object.entries(orderedList);
    sortedList.sort((a, b) => a[0].localeCompare(b[0])); 
    
    const uniqueCategoryLetters = new Set();
    for(let [name,price] of sortedList){

        let categorieLetter = name.charAt(0);

 
    if (!uniqueCategoryLetters.has(categorieLetter)) {
        uniqueCategoryLetters.add(categorieLetter);

        console.log(`${categorieLetter}`);
    }
    console.log(`  ${name}: ${price}`);
        
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);