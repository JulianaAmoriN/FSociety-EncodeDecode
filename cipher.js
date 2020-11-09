const cipher = {
  encode : function(offSetEncode,textEncode){
    if(offSetEncode == null || offSetEncode == 0){ 
      throw new TypeError("Preencha o campo corretamente")
    }

    let encrypt = "";
    const alphabetEncode = 65;
    const alphabet = 26;

    for (let index = 0; index < textEncode.length; index++) {
      if(textEncode.charAt(index) == " "){
        encrypt += " ";
      } else {
        const code = ((textEncode.charCodeAt(index) - alphabetEncode) + offSetEncode) % alphabet + alphabetEncode;
        const encode = String.fromCharCode(code);
        encrypt += encode; } 
    }
    return encrypt;
  }
  , 
  decode : function(offSetDecode,textDecode){
    if(offSetDecode == null || offSetDecode == 0 ){ 
      throw new TypeError("Preencha o campo corretamente")
    }
    
    let decrypt = "";
    const alphabetDecode = 90;
    const alphabet = 26;

    for (let index = 0; index < textDecode.length; index++) {
      if(textDecode.charAt(index) == " "){
        decrypt += " ";
      } else {
        const codeDecode = ((textDecode.charCodeAt(index) - alphabetDecode) - offSetDecode) % alphabet + alphabetDecode;
        const decode =  String.fromCharCode(codeDecode);
        decrypt += decode; }
    }
    return decrypt;
  }
};
export default cipher;
