function extractText() {
    const list = document.getElementById('items');
    let result = [];
    const items = Array.from(list.children);
    for(let item of items){
        
        result.push(item.textContent);
    }
   
    const textarea = document.getElementById('result');
    textarea.value = result.join('\n');
}