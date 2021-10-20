// Concatenación String
let nombre = "Francisco";
let apellido = "Rodríguez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

let nombreCompleto2 = "Javier" + " " + "Acevedo";
console.log(nombreCompleto2);

let x = nombre + 2 + 4;
console.log(x);
console.log(typeof x);
// No suma los valores,
// los convierte a strings
// Se conoce como contexto string

x = nombre + (2 + 4);
console.log(x);
console.log(typeof x);
x = 2 + 4 + nombre; // Esto se debe a que las expresiones se evaluan de izquierda a derecha
// al encontrar primero numeros, los trata como tales, posteriormente se concatena nuestra cadena.
console.log(x);
console.log(typeof x);

