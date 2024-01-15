function roadRadar(speed,area){
    function checkSpeeding(speed, limit, area) {
        const difference = speed - limit;
        if (speed > limit) {
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        }
    }
    switch (area) {
        case "city":
            checkSpeeding(speed, 50, "city");
            break;
        case "residential":
            checkSpeeding(speed, 20, "residential");
            break;
        case "interstate":
            checkSpeeding(speed, 90, "interstate");
            break;
        case "motorway":
            checkSpeeding(speed, 130, "motorway");
            break;
        default:
            console.log("Invalid area");
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');