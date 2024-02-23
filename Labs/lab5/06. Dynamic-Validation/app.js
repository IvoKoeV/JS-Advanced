function validate() {
    const getInputRef = document.getElementById('email');
    getInputRef.addEventListener('change', validationHandler);

    function validationHandler(e){
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }

    }
}