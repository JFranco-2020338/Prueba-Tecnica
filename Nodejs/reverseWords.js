function reverseWords(str) {
    // Dividir la cadena en un arreglo de palabras
    const wordsArr = str.split(' ');
  
    // Invertir el orden de las palabras en el arreglo
    const reversedArr = wordsArr.reverse();
  
    // Unir las palabras invertidas en una cadena
    const reversedStr = reversedArr.join(' ');
  
    // Devolver la cadena con las palabras invertidas
    return reversedStr;
  }

  console.log(reverseWords("¡Hola mundo!")); // Salida: "!mundo ¡Hola"
