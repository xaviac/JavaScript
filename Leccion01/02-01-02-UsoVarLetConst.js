// Para declarar una variable actualmene el uso adecuado es antepone let

nombre = "Xavier"; // Aunque es código válido, no es recomendable.
// La recomendació es usar let
var nombreVar = "Javier";
let nombreLet = "Xavier";
console.log(nombre, nombreVar, nombreLet);

// Declaración de constantes
// Se declaran uando no se piensa modificar
const nombreConst = "Xavi's";
console.log(nombreConst);
// Más adelante veremos las excepciones para poder modificar constantes

// Declarar variables 
let nombreCompleto = "Javier Acevedo";
// JavaScript es sensible a MAYÚSCULAS y minísculas.
let nombrecompleto = "Xavi's Acevedo";
console.log(nombreCompleto);
console.log(nombrecompleto);

// Función y método es lo mismo.

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

// Todas las variables de abajo,
// Son válidas en su declaración
// La restricción es cuando inicia con número, el cual no es válido
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

// Las palabras reservadas no están permitidas para nmbrar una variable
// Podemos usar variaciones pero es posible llegar a confundirse.
let _break = "Válido, pero pude haber confusión";