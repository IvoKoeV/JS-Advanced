function argumentInfo(...data) {
  const result = {};

  for (let el of data) {
    let typeOfElement = typeof el;
    console.log(`${typeOfElement}: ${el}`);
    if (!result.hasOwnProperty(typeOfElement)) {
      result[typeOfElement] = 0;
    }
    result[typeOfElement] += 1;
  }

  let sortedRez = Object.entries(result).sort((a,b) => b[1] - a[1]);

  for (let kvp of sortedRez){
    console.log(`${kvp[0]} = ${kvp[1]}`);
  }
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
