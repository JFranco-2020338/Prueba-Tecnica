//Crea una función llamada `get Average` que reciba una matriz de números y
//devuelva el promedio de todos los números en la matriz.


// Definir la función `getAverage` que toma un array de números como argumento
function getAverage(numbers) {
  
  // Verificar si el array de números está vacío
  if (numbers.length === 0) {
    
    // Si el array está vacío, devolver 0 como promedio
    return 0;
  }
  
  // Si el array no está vacío, sumar todos los números usando el método `reduce`
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  
  // Dividir la suma de los números por la cantidad de números en el array para obtener el promedio
  return sum / numbers.length;
}

// Crear un array de números llamado `numbers`
const numbers = [1, 2, 3, 4, 5];

// Llamar a la función `getAverage` con el array de números como argumento y mostrar el resultado en la consola
console.log(getAverage(numbers));
