function calc(num1,num2) {
    // TODO: sum = num1 + num2
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    const sum = Number(num1) + Number(num2);
    document.getElementById('sum').value = sum;
}
