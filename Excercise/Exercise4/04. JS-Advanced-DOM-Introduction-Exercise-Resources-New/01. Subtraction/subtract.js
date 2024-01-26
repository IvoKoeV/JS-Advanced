function subtract() {
    const number1 = document.getElementById('firstNumber').value;
    const number2 = document.getElementById('secondNumber').value;
    const result = Number(number1) - Number(number2);

    document.getElementById('result').textContent = result;
}