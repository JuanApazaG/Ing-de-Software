//definimos las variables
let a = 100, b = 99, c = 109;

if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    let temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

// Imprimimos los elementos
console.log(a, b, c); // Output: 2 3 4
console.log("Juan Agustin Apaza Guzman")