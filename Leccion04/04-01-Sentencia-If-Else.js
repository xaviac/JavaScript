let condicion = true;

if (condicion) {
    console.log("Condición verdadera.");
} else {
    console.log("Condición falsa.");
}

if (2 > 3) // Si sólo tiene una sentencia a ejecutarse,
    console.log("Condición verdadera.");
 else // puedo omitir las llaves
    console.log("Condición falsa.");

if(10%2 === 0) console.log("Para este condicional, no use llaves"); // Es posible, porque solo tiene una sentencia.


let numero = 3;

if (numero == 1) {
    console.log("Número uno");
} else if (numero == 2) {
    console.log("Número dos");
} else if (numero == 3) {
    console.log("Número tres");
} else if (numero == 4) {
    console.log("Número cuatro");
} else {
    console.log("Número desconocido");
}

let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto";
}

console.log(estacion);

//mes = 2;
switch (mes) {
    case 1:
    case 2:
    case 12:
        estacion = 'Invierno';
        break;
    case 3:
    case 4:
    case 5:
        estacion = 'Primavera';
        break;
    case 6:
    case 7:
    case 8:
        estacion = 'Verano';
        break;
    case 9:
    case 10:
    case 11:
        estacion = 'Primavera';
        break;
    default:
        estacion ='Valor incorrecto.';
        break;
}

console.log(estacion);



console.log("a".localeCompare("b"));
console.log("b".localeCompare("a"));
console.log("a".localeCompare("a"));


if ('') {
    console.log("true");
} else {
    console.log("false");
}

const items = ['tacos', 'perros', 'buró', "miedo", 'sueño', 'alcohol'];

items.sort((a,b) => a.localeCompare(b/*, 'es', {ignorePunctuation: true}*/));
console.log(items);


let porcentaje = 5e-2;
console.log(100*porcentaje);

let anyNumber = 5.679345;
console.log(typeof anyNumber);
let roundedToOne = anyNumber.toFixed(1);
console.log(roundedToOne);
console.log(typeof roundedToOne);

roundedToOne = +anyNumber.toFixed(1);
console.log(roundedToOne);
console.log(typeof roundedToOne);

function holaMundo(){
let language2;
language2 = parseInt(prompt(`
¿En qué idioma quieres decir "Hola Mundo!?"
Elige el número del idioma:
1. Español
2. Frances
3. Inglés`));

if (language2 === 1) {
    console.log("Hola, mundo!");
} else if(language2 === 2) {
    console.log("Bonjour tout le monde");
} else if (language2 === 3) {
    console.log("Hello, world!");
} else {
    console.log("Introduce a correct option.");
}
}

// holaMundo()
let i =0
do {
    //let i = 0;
    if (i === 10) {
        console.log("ten");
    } else if (i === 20) {
        console.log("twenty");
    } else {
    console.log(i);
    }i++;
} while (i < 31);

i = 0;
while (i <= 20) {
    if (i%2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
    i++;
}


function getUserInfo(firstName, lastName) {
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
    };
  
    return userInfo;
  }
  
  getUserInfo('ana', 'martinez');

  
  const userData = getUserInfo('ana', 'martinez');
const firstName = userData.firstName;
console.log(firstName); // => ana

const lastName = userData.lastName;
console.log(lastName);

console.log(`${firstName} ${lastName}`)