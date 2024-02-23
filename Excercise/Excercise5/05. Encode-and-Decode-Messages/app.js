function encodeAndDecodeMessages() {
    const encodeBtn = document.getElementsByTagName('button')[0];
    const decodeBtn = document.getElementsByTagName('button')[1];
    const encodeTextInput = document.getElementsByTagName('textarea')[0];
    const decodeTextOutput = document.getElementsByTagName('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let text = encodeTextInput.value;
        let encodedText = '';
        for (let i = 0; i < text.length; i++) {
            encodedText += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        encodeTextInput.value = '';
        decodeTextOutput.value = encodedText;
    }

    function decode() {
        let text = decodeTextOutput.value;
        let decodedText = '';
        for (let i = 0; i < text.length; i++) {
            decodedText += String.fromCharCode(text.charCodeAt(i) - 1);
        }
        decodeTextOutput.value = decodedText;
    }
}