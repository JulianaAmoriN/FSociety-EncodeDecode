import cipher from './cipher.js';

console.log(cipher);


let capturando1 = "";
let numero1 = "";
const botao1 = document.getElementById("send1")
botao1.addEventListener("click",capturar1)

let capturando2 = "";
let numero2 ="";
const botao2 = document.getElementById("send2")
botao2.addEventListener("click",capturar2)


function capturar1 (event) {
    event.preventDefault()
    numero1 = document.getElementById("scret1").value;
    capturando1 = document.getElementById('message1').value;
    document.getElementById('answer1').innerHTML = capturando1;
    
    console.log(capturando1)
    console.log(numero1)
}

function capturar2 (event) {
    event.preventDefault()
    numero2 = document.getElementById("scret2").value;
    capturando2 = document.getElementById('message2').value;
    document.getElementById('answer2').innerHTML = capturando2;

    console.log(capturando2)
    console.log(numero2)
}



//lincar meu elemnto secret com variavel e depois a função com o offset dessa forma ele vai enviar a mensagem pro deslocamento 

// criar uma 
//const =secret 
//function {
    //
