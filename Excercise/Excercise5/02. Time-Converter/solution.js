function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll("input[type='button']"));

    for(let btn of buttons){
        btn.addEventListener("click", convetHandler);
    }
    
    function convetHandler(e){
        let currentUnitInput = e.currentTarget.parentElement.children[1];
        let value = Number(currentUnitInput.value);
        let unit = currentUnitInput.id;

        switch(unit){
            case "days":  inputConverter(value); break;
            case "hours":   inputConverter(value / 24); break;
            case "minutes": inputConverter(value /24 / 60); break;
            case "seconds": inputConverter(value/24/60/60); break;
        }

    }
    function inputConverter(days){
        let inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }

}