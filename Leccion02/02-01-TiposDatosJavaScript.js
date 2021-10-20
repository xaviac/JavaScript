/* 
Ejemplos de
tipos de datos
en JavaScript
*/
// Tipo de dato String
let nombre = "Xavier";
console.log(typeof nombre);

nombre = 10;
console.log(nombre);
console.log(typeof nombre);

// Tipo de dato number
let number = 1000;
console.log(number);

// Tipo de dato Objeto
let object = {
    nombre: "Javier",
    apellido: "Pérez",
    telefono: "5566778899"
};
console.log(object);

// Tipo de dato boolean
let bandera = true;
console.log(typeof bandera);


// Tipo de dato function
 function miFunction(){}
 console.log(typeof miFunction);

 // Tipo de dato symbol
 let simbolo = Symbol("Mi simbolo");
 console.log(typeof simbolo);

 // Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Tipo de dato undefined
// undefined es un valor que se puede asignar a una variable,
// pero también es un tipo de dato.
let x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);

// null = ausencia de valor
// null se asigna como valor, pero su tipo de dato es object
let y = null;
console.log(y);
console.log(typeof y);

// Tipo de dato Object 
// Los array son Object en JavaScript
let autos = ["Nissan", "Honda", "Pontiac"];
console.log(autos);
console.log(typeof autos);

// Valores vacios
// Cadena vacía no es un tipo de dato,
// es un valor que podemos asignar
let z = "";
console.log(z);
console.log(typeof z);

