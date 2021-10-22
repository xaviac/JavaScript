let a = 3, b = 2, c = "3";

let z = (a == b);
console.log(z);

z = a == c; // Revisa el valor, sin importar el tipo
console.log(z);

z = a === c; // Revisión estricta, considerando el tipo
console.log(z);



// Operador diferente a !=
//
z = (a != b);
console.log(z);

z = a != c; // Revisa el valor, sin importar el tipo
console.log(z);

z = a !== c; // Revisión estricta, considerando el tipo
console.log(z);



// Operadores Relacionales.
//
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);
