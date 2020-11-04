const cipher = {
  //declaro dentro do obejto da variavel a função, sendo assim o que nomeia a função é o objeto que ela esta dentro 
  encode : function(offSet1,text1){
    if(offSet1 == null || offSet1 == 0){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let encrypt1 ="";

    for (let index = 0; index < text1.length; index++) {
      //index é o parametro da posição inicial  de onde deve começar o loop 
      //enquanto index for menor que o numero retornado por length deve continuar o loop (parametro)
      //adiciona 1 a index pro processo ser iniciado novamente (incremento)
      let code1 = ((text1.charCodeAt(index) - 65) + offSet1) % 26 + 65;
      let encode1 = String.fromCharCode(code1);

      encrypt1 += encode1;   
    }
    
    return encrypt1
    //return finaliza a execução de uma função e 
    //especifica os valores que devem ser retonados para onde a função foi chamada

  }
  , 
  decode : function(offSet2,text2){
    if(offSet2 == null || offSet2 == 0 ){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let encrypt2="";

    for (let index = 0; index < text2.length; index++) {

      let code2 = ((text2.charCodeAt(index) - 90) - offSet2) % 26 + 90;
      let encode2 =  String.fromCharCode(code2)
      
      encrypt2 += encode2;  
    }

    return encrypt2

  }
};

export default cipher;
