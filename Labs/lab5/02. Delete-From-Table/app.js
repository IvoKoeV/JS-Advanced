function deleteByEmail() {
    const emailRef = document.querySelector("input[name='email']");    
    const btn = document.getElementsByTagName('button');
    const getTableTr = Array.from(document.querySelectorAll('tbody tr'));
    const result = document.getElementById('result');
    let isDeleted = false;
    for(let data of getTableTr){
      
        let td = data.children;
        if (td[1].textContent == emailRef.value){
            data.remove();
            isDeleted=true;
        } 
    }
    result.textContent = isDeleted ? 'Deleted.' : 'Not found.';
    emailRef.textContent = '';
}