const cipher = {
  //declaro dentro do obejto da variavel a função, sendo assim o que nomeia a função é o objeto que ela esta dentro 
  encode : function(offSet1,text1){
    if(offSet1 == null || offSet1 == 0){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let encrypt = "";
    const alphabetEncode = 65
    const alphabet1 = 26

    for (let index = 0; index < text1.length; index++) {
      //index é o parametro da posição inicial  de onde deve começar o loop 
      //enquanto index for menor que o numero retornado por length deve continuar o loop (parametro)
      //adiciona 1 a index pro processo ser iniciado novamente (incremento)
      if(text1.charAt(index) == " "){
        encrypt += " "
      } else {
        let code1 = ((text1.charCodeAt(index) - alphabetEncode) + offSet1) % alphabet1 + alphabetEncode;
        let encode1 = String.fromCharCode(code1);

      encrypt += encode1 } 
    }
    
    return encrypt
    //return finaliza a execução de uma função e 
    //especifica os valores que devem ser retonados para onde a função foi chamada

  }
  , 
  decode : function(offSet2,text2){
    if(offSet2 == null || offSet2 == 0 ){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let decrypt = "";
    const alphabetDecode = 90
    const alphabet2 = 26

    for (let index = 0; index < text2.length; index++) {

      if(text2.charAt(index) == " "){
        decrypt += " "
      } else {

      let code2 = ((text2.charCodeAt(index) - alphabetDecode) - offSet2) % alphabet2 + alphabetDecode;
      let decode2 =  String.fromCharCode(code2)
      
      decrypt += decode2; }
    }

    return decrypt

  }
};

export default cipher;
