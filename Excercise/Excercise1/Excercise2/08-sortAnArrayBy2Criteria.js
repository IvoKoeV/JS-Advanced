function sortAnArrayBy2Criteria(arr){
    let sortedArr = arr.sort((a,b) => {
        const lengthComparison = a.length - b.length;
        return lengthComparison !== 0 ? lengthComparison : a.localeCompare(b);
    });
    console.log(sortedArr.join('\n'));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]);