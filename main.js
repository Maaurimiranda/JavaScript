//EJERCICIO 1 - Suma de Variables
console.log("EJERCICIO 1 - Suma de Variables");
//primer ejercicio
let a = 5, b = 10, c;
c = a + b;
console.log("La suma de a y b es ", c);

//segundo ejercicio
let nombreIngresado = prompt("Introducir su nombre");
console.log("Hola, " + nombreIngresado + "!");


//EJERCICIO 2 - Operadores lógicos y condicionales
console.log("EJERCICIO 2 - Operadores lógicos y condicionales");
//primer ejercicio
if (a > b) {
  c = a;
  console.log(`El número mayor es ${c}`);
} else if (b > a) {
  c = b;
  console.log(`El número mayor es ${c}`);
} else {
  console.log("Ambos números son iguales");
}

//segundo ejercicio - paridad
let isPar = prompt("Ingresa un número y te dire si es par o impar");
isPar = Number(isPar);

// Verificar si es un número válido
if (isNaN(isPar)) {
  console.log("El valor ingresado no es un número válido");
} else {
  // Verificar si es par o impar
  if (isPar % 2 === 0) {
    console.log("El número " + isPar + " es par");
  } else {
    console.log("El número " + isPar + " es impar");
  }
}

//EJERCICIO 3 - Operadores de asignación y bucles
console.log("EJERCICIO 3 - Operadores de asignación y bucles");
//primer ejercicio
let numero = 10;

while (numero > 0) {
  console.log(numero);
  numero --;
}

let numeroIngresado;

do {
  numeroIngresado = prompt("Ingresar un numero mayor a 100: ");
  numeroIngresado = Number(numeroIngresado);

} while (numeroIngresado <= 100 || isNaN(numeroIngresado));

console.log("El número ingresado es: " + numeroIngresado);

//EJERCICIO 4 - Funciones en JavaScript
console.log("EJERCICIO 4 - Funciones en JavaScript");
//primer ejercicio

function esPar (ejercicio4) {
  return ejercicio4 %2 === 0;
}

console.log("El número 8 es par: " + esPar(8));
console.log("El número 7 es par: " + esPar(7));

//segundo ejercicio
function convertirCelsiusAFahrenheit (temperatureCelsius){
  let temperatureFahrenheit;
  return temperatureFahrenheit = temperatureCelsius * 1.8 + 32;
}

let temperatureCelsius = prompt("Ingresar temperatura en Celsius para su conversion a Fahrenheit");
temperatureCelsius = Number(temperatureCelsius);
console.log(temperatureCelsius + "°C son equivalente a " + convertirCelsiusAFahrenheit(temperatureCelsius) + "°F");

//EJERCICIO 5 - Objetos en JavaScript
console.log("EJERCICIO 5 - Objetos en JavaScript");
//Primer ejercicio
let persona = {
  //ATRIBUTOS
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  
  //METODOS
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad; // Actualiza la propiedad ciudad
  }
}

console.log("Antes de actualizar:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Muestra las propiedades actualizadas en la consola
console.log("\nDespués de actualizar:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

let libro = {
  nombre: "Don Quijote de la Mancha,",
  autor: " Miguel de Cervantes",
  año: 1605,

  esAntiguo: function(){
    const añoActual = new Date().getFullYear(); // Obtener el año actual
    return (añoActual - this.año) > 10;
  }
}

if (libro.esAntiguo()) {
  console.log(`El libro "${libro.titulo}" de ${libro.autor} es antiguo.`);
} else {
  console.log(`El libro "${libro.titulo}" de ${libro.autor} es reciente.`);
}

//EJERCICIO 6 - Arrays
console.log("EJERCICIO 6 - Arrays");
//primer ejercicio
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosMultiplicados = [];

for (let i = 0; i < array.length; i++) {
  numerosMultiplicados[i] = array[i] * 2; // Multiplica por 2 y almacena en el nuevo array
}

console.log("Array original:", array);
console.log("Array con números multiplicados por 2:", numerosMultiplicados);

//segundo ejercicio

let pares = [];

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
  if (pares.length === 10) {
    break;
  }
}

console.log("Primeros 10 números pares:", pares);

//EJERCICIO 7 - DOM


  