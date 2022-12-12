function invertirCadena(cad) {
    if (cad === "")
      return "";
    else
      return invertirCadena(cad.substr(1)) + cad.charAt(0);
  }
  invertirCadena("laura aline");   

  function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("anita lava la tina");


  function espalindromo(str){

      str =str.toLowerCase();
    
    str = str.replaceAll("", "");
    
    if (reves(str)==str) return true;
    
    return false;
    
    }//esPalindromo I