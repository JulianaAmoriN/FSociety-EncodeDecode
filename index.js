import cipher from "./cipher.js";

const buttonEncode = document.getElementById("sendEncode");
buttonEncode.addEventListener("click",formEncode);

const buttonDecode = document.getElementById("sendDecode");
buttonDecode.addEventListener("click",formDecode);

const copyButton = document.getElementById("copy");
copyButton.addEventListener("click",(copy))
    
function copy (event){
    event.preventDefault();

    const textInput = document.getElementById("answerEncode");

    textInput.select();
    document.execCommand("copy");
}
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

