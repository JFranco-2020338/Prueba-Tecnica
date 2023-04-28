function capitalizeFirstLetters(str) {
    // Separar la cadena en palabras individuales
    const words = str.split(' ');
  
    // Recorrer cada palabra y capitalizar su primera letra
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // Unir las palabras de nuevo en una sola cadena y devolverla
    return words.join(' ');
  }

   const str = 'todo esta en minusculas y la funcion lo convierte en mayusculas';
   console.log(capitalizeFirstLetters(str)); // Salida: 'Hola Mundo'
