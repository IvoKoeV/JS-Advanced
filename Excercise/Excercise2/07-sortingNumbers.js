function sortingNumbers(data){
    let result = [];
    data.sort((a,b) => a-b);
    let i = 0;
    while(data.length>0){
        if(i % 2 === 0){
            result.push(data.shift());
        }else{
            result.push(data.pop());
        }
        i++;
    }
    return result;
}   
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
