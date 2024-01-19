function thElementFromAnArray(arrOfStr,number){
    let rez = [];
    for(let i=0; i < arrOfStr.length;i += number){
        rez.push(arrOfStr[i]);
    }
    return rez;
}
thElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
thElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2
);
thElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
);