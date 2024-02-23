//definimos las variables
let a = 4, b = 2, c = 3;

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