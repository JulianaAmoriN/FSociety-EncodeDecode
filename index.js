import cipher from "./cipher.js";

const button1 = document.getElementById("sendEncode");
button1.addEventListener("click",formEncode);
//addEventListener fica esperando o evento acontecer, observador

const button2 = document.getElementById("sendDecode");
button2.addEventListener("click",formDecode);

const textInput = document.getElementById("answerEncode");
const copyButton = document.getElementById("copy");
copyButton.addEventListener("click",(event) => {
    event.preventDefault();
    textInput.select();
    document.execCommand("copy");
});

function formEncode (event) {
    event.preventDefault();
    
    const numberEncode = document.getElementById("scretEncode").value;
    const offSetEncode = parseInt(numberEncode);

    const printEncode = document.getElementById("messageEncode").value;
    const textEncode = printEncode.toUpperCase();

    document.getElementById("answerEncode").innerHTML = cipher.encode(offSetEncode,textEncode);
}
function formDecode (event) {
    event.preventDefault();

    const numberDecode =document.getElementById("scretDecode").value;
    const offSetDecode = parseInt(numberDecode);

    const printDecode = document.getElementById("messageDecode").value;
    const textDecode = printDecode.toUpperCase();
   
    document.getElementById("answerDecode").innerHTML = cipher.decode(offSetDecode,textDecode);
}

