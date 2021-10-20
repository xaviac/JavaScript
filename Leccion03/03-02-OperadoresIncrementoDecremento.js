let a = 3, b = 2;
let z = a + b;

// Incremento
// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a); // vemos como primero se incrementa el valor de a
console.log(z); // depués de incrementarse, es asignada a z

// Post-incremento (el operador ++ depués de la variable)
z = b++;
console.log(b); // Vemos como el valor de b tuvo un incremento porque actua el operador de incremento después de ser asignada.
console.log(z); // Aquí el valor de b aun es 2 porque primero se asigna y en un uso posterior será incrementada.

// Decremento
// Pre-decremento (el operador -- antes de la variable)
z = --a;
console.log(a); // Su valor anterior erá 4, como se decrementa antes
console.log(z); // se asigna a z como 3

// Post-decremento (el operador -- depués de la variable)
z = b--;
console.log(b); // Aquí vemos que se decrementa después de ser asignado, por ello toma el valor de 2
console.log(z); // Al momento de ser asignado, a tiene un valor de 3, porteriormente se decrementa, pero al asignarse conserva el 3 porque el operador de decrmento esta escrito posteriormente.

