const cipher = {
  //declaro dentro do obejto da variavel a função, sendo assim o que nomeia a função é o objeto que ela esta dentro 
  encode : function(numero11,capturando11){
    if(numero11 == null|| numero11 == 0){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let texto="";

    for (let index = 0; index < capturando11.length; index++) {
      //index é o parametro da posição inicial  de onde deve começar o loop 
      //enquanto index for menor que o numero retornado por length deve continuar o loop (parametro)
      //adiciona 1 a index pro processo ser iniciado novamente (incremento)
      let resposta1 = ((capturando11.charCodeAt(index) - 65) + numero11) % 26 + 65;
      let codificado1 = String.fromCharCode(resposta1);

      texto += codificado1;   
    }
    
    return texto
    //return finaliza a execução de uma função e 
    //especifica os valores que devem ser retonados para onde a função foi chamada

  }
  , 
  decode : function(numero22,capturando22){
    if(numero22 == null || numero22 == 0 ){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let texto2="";

    for (let index = 0; index < capturando22.length; index++) {

      let resposta2 = ((capturando22.charCodeAt(index) - 90) - numero22) % 26 + 90;
      let codificando2 =  String.fromCharCode(resposta2)
      
      texto2 += codificando2;  

    }

    return texto2

  }
};

export default cipher;
