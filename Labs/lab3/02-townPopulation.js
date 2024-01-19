function townPopulation(arr){
    let towns = {};
    for(let population of arr){
        let [town,pop] = population.split(" <-> ");
        if(!towns.hasOwnProperty(town)){
            towns[town]=Number(pop);
        }else{
            towns[town]+= Number(pop);
        }
    }
    for(let [town,ppl] of Object.entries(towns)){
        console.log(`${town} : ${ppl}`);
    }
}   
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);