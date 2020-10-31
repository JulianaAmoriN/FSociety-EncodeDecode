import cipher from './cipher.js';

console.log(cipher);


let capturando1 = "";
let capturando11 = "";
let numero1 = "";
const botao1 = document.getElementById("send1")
botao1.addEventListener("click",capturar1)

let capturando2 = "";
let capturando22 = "";
let numero2 ="";
const botao2 = document.getElementById("send2")
botao2.addEventListener("click",capturar2)



function capturar1 (event) {
    event.preventDefault()
    numero1 = document.getElementById("scret1").value;
    const numero11 = parseInt(numero1);


    capturando1 = document.getElementById('message1').value;
    capturando11 = capturando1.toUpperCase()

    let resposta1 = ((capturando11.charCodeAt(0) - 65) + numero11) % 25 + 65;
    let codificado1 = String.fromCharCode(resposta1)

    document.getElementById('answer1').innerHTML = codificado1;

    console.log(resposta1)
    console.log(capturando1)
    console.log(capturando11)
    console.log(numero1)
    console.log(numero11)
    console.log(codificado1)
}

function capturar2 (event) {
    event.preventDefault()
    numero2 =document.getElementById("scret2").value;
    const numero22 = parseInt(numero2);
    

    capturando2 = document.getElementById('message2').value;
    capturando22 = capturando2.toUpperCase()

    let resposta2 = ((capturando22.charCodeAt(0) - 65) - numero22) % 25 + 65;
    let codificando2 =  String.fromCharCode(resposta2)

    document.getElementById('answer2').innerHTML = codificando2;
    
    console.log(capturando2)
    console.log(capturando22)
    console.log(numero2)
    console.log(numero22)
    console.log(resposta2)
    console.log(codificando2)
}



//lincar meu elemnto secret com variavel e depois a função com o offset dessa forma ele vai enviar a mensagem pro deslocamento 

// criar uma 
//const =secret 
//function {
    //
