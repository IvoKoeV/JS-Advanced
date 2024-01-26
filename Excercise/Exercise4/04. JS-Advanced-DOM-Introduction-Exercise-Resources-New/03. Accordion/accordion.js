function toggle() {
    let butttonContext = document.getElementsByClassName("button")[0];
    let displayText = document.getElementById('extra');
    if (displayText.style.display === "none"){
        displayText.style.display = "block";
        butttonContext.innerHTML = 'Less';
    }else{
        displayText.style.display = "none";
        butttonContext.innerHTML = 'More';
    }
}