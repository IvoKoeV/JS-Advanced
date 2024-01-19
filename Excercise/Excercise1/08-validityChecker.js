function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }
    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);

    const isValid1 = Number.isInteger(distance1);
    const isValid2 = Number.isInteger(distance2);
    const isValid3 = Number.isInteger(distance3);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid1 ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid2 ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid3 ? 'valid' : 'invalid'}`);
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);