const cipher = {
  encode : function(numero11,capturando11){

    let texto="";

    for (let index = 0; index < capturando11.length; index++) {
    
      let resposta1 = ((capturando11.charCodeAt(index) - 65) + numero11) % 26 + 65;
      let codificado1 = String.fromCharCode(resposta1);

      texto += codificado1[index];   
    }
    
    return texto

  }
  , 
  decode : function(numero22,capturando22){

    let texto2="";

    for (let index = 0; index < capturando22.length; index++) {

      let resposta2 = ((capturando22.charCodeAt(0) - 90) - numero22) % 26 + 90;
      let codificando2 =  String.fromCharCode(resposta2)
      
      texto2 += codificando2[index];   
    }

    return texto2

  }
};

export default cipher;
