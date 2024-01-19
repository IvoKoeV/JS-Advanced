function cityRecord(city,population,treasury){
    let cityObj = {
        name: city,
        population: population,
        treasury: treasury
    }
    return cityObj;
}
console.log(cityRecord('Tortuga',
7000,
15000
));
cityRecord('Santo Domingo',
12000,
23500
);