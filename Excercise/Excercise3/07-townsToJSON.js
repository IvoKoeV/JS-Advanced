function townToJSON(data){
    let result = [];
    let [town,latitude,longitude] = data[0].split(' ');
    for(let dawe of data){
        console.log(town);
        let tokens = dawe.split('|').map(x=>x.trim()).filter(x => !!x) ;
        // if (tokens.length === 3){
        //     let [town, latitude, longitude] = tokens;
        //     let obj = {Town: town, Latitude: Number(latitude), Longitude: Number(longitude)};
        //     result.push(obj);
        // }
    }
    console.log(result);
}
townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
townToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);