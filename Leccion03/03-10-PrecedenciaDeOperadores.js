let x = 5, y = 10, z = ++x + y--; // El decremento de "y" queda pendiente, hast que vuelva a usarse "z".
console.log(x);
console.log(y);
console.log(z); // El valor al sumarse de "y" era 10, al usarse después de z, ahora vale 9 por el postdecremento.

let resultado = 4 + 5 * 6 / 3; // Sin revisar aún, debe de dar 14
console.log(resultado);


resultado = (4 + 5) * 6 / 3; // Sin revisar, debe dar 18, por los paréntesis que modifica la precedencia.
console.log(resultado);