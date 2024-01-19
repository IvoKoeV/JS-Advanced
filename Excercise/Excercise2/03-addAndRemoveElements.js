function addAndRemoveElements(commands){
    let rez = [];
    const initalNum = 1;
    for(let i = 0; i < commands.length;i++){
        if (commands[i] === 'add'){
            rez.push(initalNum + i);
        }else if(commands[i] == 'remove'){
            rez.pop();
        }
    }
    if(rez.length === 0){
        console.log('Empty');
    }
    
    console.log(rez.join('\n'));
}
addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);
console.log('---------');
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);
console.log('---------');
addAndRemoveElements(['remove', 
'remove', 
'remove']
);