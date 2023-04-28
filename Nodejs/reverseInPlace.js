function reverseInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
      const temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    return array;
  }

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseInPlace(array);
console.log(reversedArray); // muestra [5, 4, 3, 2, 1]
