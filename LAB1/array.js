//definimos el arreglo
let numeros = [4, 2, 3];

// Utilizamos el método sort() para ordenar los elementos del array de menor a mayor
numeros.sort((x, y) => x - y);

// Imprimimos los elementos del array ya ordenados
console.log(numeros[0], numeros[1], numeros[2]); // Output: 2 3 4