import cipher from "./cipher.js";

const button1 = document.getElementById("send1");
button1.addEventListener("click",copy1);
//addEventListener fica esperando o evento acontecer, observador

const button2 = document.getElementById("send2");
button2.addEventListener("click",copy2);

const textInput = document.getElementById("answer1");
const copyButton = document.getElementById("copy");
copyButton.addEventListener("click",(event) => {
    event.preventDefault();
    textInput.select();
    document.execCommand("copy");
});

function copy1 (event) {
    event.preventDefault();
    //event.preventDefault impede que a pagina regarregue quando apertar o botão
    let print1 = "";
    let text1 = "";
    let number1 = "";
    let offSet1 = "";
    
    number1 = document.getElementById("scret1").value;
    offSet1 = parseInt(number1);
    //parseInt transforma minha string em numero

    print1 = document.getElementById("message1").value;
    text1 = print1.toUpperCase();
    //toUpperCase faz a letra ficar maiuscula 

    document.getElementById("answer1").innerHTML = cipher.encode(offSet1,text1);
    //o innerHTML define ou retorna o conteúdo HTML
}

function copy2 (event) {
    event.preventDefault();

    let print2 = "";
    let text2 = "";
    let number2 = "";
    let offSet2 = "";

    number2 =document.getElementById("scret2").value;
    offSet2 = parseInt(number2);

    print2 = document.getElementById("message2").value;
    text2 = print2.toUpperCase();
   
    document.getElementById("answer2").innerHTML = cipher.decode(offSet2,text2);
    
}

