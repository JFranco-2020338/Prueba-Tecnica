function removeDuplicates(arr) {
    // Crear un objeto Set a partir de la matriz para obtener elementos únicos
    const uniqueSet = new Set(arr);
  
    // Convertir el objeto Set de nuevo a una matriz
    const uniqueArr = [...uniqueSet];
  
    // Devolver la nueva matriz con elementos únicos
    return uniqueArr;
  }
  
  const arr = [1, 2, 2, 3, 3, 3, 4, 5, 5, 8, 8];
console.log(removeDuplicates(arr)); // Salida: [1, 2, 3, 4, 5]
