// Definir la función `countVowels` que toma una cadena como argumento
function countVowels(str) {

    // Convertir la cadena a minúsculas para evitar problemas con mayúsculas
    const lowerCaseStr = str.toLowerCase();
  
    // Contar el número de vocales en la cadena
    let vowelCount = 0;
  
    // Utilizar un bucle `for` para recorrer cada letra en la cadena en minúsculas
    for (let i = 0; i < lowerCaseStr.length; i++) {
  
      // Si la letra actual es una vocal, aumentar la cuenta de vocales en 1
      if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
        vowelCount++;
      }
    }
  
    // Devolver el número de vocales
    return vowelCount;
  }
  
  // Llamar a la función `countVowels` con la cadena "Hola mundo" como argumento y mostrar el resultado en la consola
  console.log(countVowels("hola")); // Salida: 4
  