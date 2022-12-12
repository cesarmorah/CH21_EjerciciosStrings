function invertirCadena(cad) {
    if (cad === "")
      return "";
    else
      return invertirCadena(cad.substr(1)) + cad.charAt(0);
  }
  invertirCadena("laura aline");