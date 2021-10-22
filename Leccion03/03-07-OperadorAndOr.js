// Operador AND (&&) regresa true si ambos operando
// son verdaderos
let a = 5;
let valMin = 0, valMax = 10;

a= -1; // Se evalúa fuera de rango

a = 15; // Sigue estando fuera de rango

a= 2; // Vuelve a estar dentro de rango

if (a >= valMin && a <= valMax) { // Ambas condiciones deben ser verdaderas, si una sola es false, la expresión es falsa
    console.log("Dentro de rango");
} else {
    console.log("Fuera de rango");
}


//
// Operador OR (||) regresa true si al menos uno de los 
// operandos es verdadero.
let vacaciones = false, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado");
}
