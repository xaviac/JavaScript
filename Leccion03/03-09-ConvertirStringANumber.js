let miNumero = "18x";
console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(edad);
console.log(typeof edad);

if (isNaN(edad)) {
    console.log("No es un número");
} else {
    if (edad >= 18) {
        console.log("Puede votar.");
    } else {
        console.log("Muy joven para votar.");
    }
}

if (isNaN(edad)) {
    console.log("No es un número");
} else {
    let puedeVotar = edad >= 18 ? "Puede votar" : "Muy joven para votar.";
    console.log(puedeVotar);
}


