// Definir la función `findLongestWord` que toma un array de palabras como argumento
function findLongestWord(words) {

    // Definir una variable `longestWord` vacía que se utilizará para realizar un seguimiento de la palabra más larga encontrada hasta ahora
    let longestWord = "";
  
    // Recorrer cada palabra en el array `words`
    for (let i = 0; i < words.length; i++) {
  
      // Comparar la longitud de la palabra actual con la longitud de la palabra más larga encontrada hasta ahora
      if (words[i].length > longestWord.length) {
  
        // Si la longitud de la palabra actual es mayor que la longitud de la palabra más larga encontrada hasta ahora, actualizar la variable `longestWord` para contener la palabra actual
        longestWord = words[i];
      }
    }
  
    // Devolver la palabra más larga encontrada
    return longestWord;
  }
  
  // Crear un array de palabras llamado `words`
  const words = ["apple", "JEFFERSON", "pear", "orange"];
  
  // Llamar a la función `findLongestWord` con el array de palabras como argumento y mostrar el resultado en la consola
  const longestWord = findLongestWord(words);
  console.log(longestWord);