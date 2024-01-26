function solve() {
    let textRef = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    const resultRef = document.getElementById('result');
    let result = '';
    textRef=textRef.toLowerCase();
    
    switch(currentCase){
      case 'Camel Case':
        let textArr = textRef.split(' ');
        result = textArr.shift().toLowerCase();
        textArr.forEach(word => {
          result += word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
        break;
      case 'Pascal Case':
          textRef.split(' ').forEach(word => {
            result += word[0].toUpperCase() + word.substring(1);
          });
          break;
      default:
        result = 'Error!'
      }

    resultRef.textContent = result;

}