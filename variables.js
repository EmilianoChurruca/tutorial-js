// Diferencia entre var - let y const
// Con var la variable es global. 
// Con let y const es más lógico y vale solo dentro de las llaves
// de bucle o función. 
console.log ("Definición de variables");


const bicicleta = "Playera";
let moto = "Ducati";
var auto = "Ferrari";


if (auto) {
    var auto = "Porsche";
    console.log ('Adentro del if: ', auto);
};
console.log ('Afuera del if:', auto);


if (moto) {
    let moto = "Yamaha";
    console.log ('Adentro del if: ', moto);
};

console.log ('Afuera del if:', moto);


//
//
// Funciones
console.log("Funciones");
// 
// 
// Primero se define
function hola(){
    console.log("Acá la función hola");
};


// Luego se llama a la función
hola();

// También le puedo asignar la función a una variable
//
let alumno = function(apellido){
    console.log("Alumno apellido ___", apellido);
}

alumno("Bomparola");

// Representación de strings
console.log("Representación de Strings");
// Ojo con las comillas que usamos!!!

const nombre = "Maradona";
const posicion = "10";

console.log (nombre + " juega de " + posicion);
console.log ("${nombre} juega de ${posicion}" );
console.log (`${nombre} juega de ${posicion}`);


// Arrow Function
console.log("Arrow function");
// Sirve para simplificar la escritura del código.
// Se pasa el nombre de la función para detrás del paréntesis y 
// se coloca el símbolo =>
// Primero vamos con una función tradicional con un parámetro

tradicional = function(pintor){
    console.log(`Mi pintor favorito es ${pintor}`);
}

tradicional ("Michelangelo Buonarotti");

// Ahora vamos con el arrow function
// En sus dos maneras
// La función pierde el nombre y se manda solo el parámetro
// si es un solo parámetro, puede ir sin paréntesis

let obra = pintor => {
    return `Mi pintor favorito es ${pintor}`;
}

let favorito = obra ("Álvaro Castagnet");
console.log(favorito); 

console.log(obra("Leonardo da Vinci"));

// Arrow function simplificada
// para hacer más simple, se sacan las llaves

let ciudad_favorita = eleccion => console.log(`Me encantaría vivir en ${eleccion}`);

// Opción 1
ciudad_favorita("Roma");

// Opción 2
let elegida = ciudad_favorita("Florencia");

// Si van más de un parámetro, tenemos que poner un paréntesis

let favorita_city = (eleccion1, eleccion2) => console.log(`Me encantaría vivir en ${eleccion1} o en ${eleccion2}`);

favorita_city("Montevideo", "Berlín");


//
// Object Literal
//

console.log("Object literal");

// Definición de un objeto 
const deportista = {
    nombre: "Valentino",
    deporte: "Motociclismo"
};

// Esto es una definición de algo que no tiene objeto
let nombreDeportista = "Collin Mc Rae";
let nombreDeporte = "rally";

// Mirar las diferencias en la consola, 
// Cómo los muestra diferentes.
console.log(deportista);
console.log(nombreDeportista);
console.log(nombreDeporte);

// Para acceder a los valores del objeto
console.log("Accediendo a los valores del objeto");
console.log(deportista.nombre);
console.log(deportista.deporte);

// Otra manera de acceder 
console.log(deportista['nombre']);


// El Object Literal nos permite usar un valor por cada variable
// Si necesito un  objeto distinto pero con la misma 
// estructura, tengo que crear otro objeto


const deportista_otro = {
    nombre: "Cristiano Ronaldo",
    deporte: "Fútbol"
};

console.log("Accediendo a los valores del objeto");
console.log(deportista_otro.nombre);
console.log(deportista_otro.deporte);


// Si necesitamos muchos objetos del mismo tipo
// tenemos que usar Object Constructor
// El Object Literal es la manera "antigua" de hacer las cosas porque
// javaScript no tenía soporte a objetos, entonces se hacía de esa manera 
// y se metía en algo llamado Prototypes que vamos a ver luego.
// Pero vamos ahora con Object Constructor.
console.log ("Object Constructor"); 

function Guerrero(nombre, bando, locacion){
    this.nombre = nombre;
    this.bando = bando;
    this.locacion = locacion;
}

const protagonista1 = new Guerrero('Uthred', 'Sajones', 'Bebbanbourg');
const protagonista2 = new Guerrero('Kanut', 'Vikingo');

console.log (protagonista1);
console.log (protagonista2);

// Accediendo a los valores
console.log(protagonista1.nombre);


// Ahora vamos con los prototypes
// Sirven para "atar" una función a un determinado tipo de objeto, 
// como si fuera un método propio de ese objeto

// Definimos un objeto mediante Object Constructor

function Personaje(nombre, ocupacion){
    this.nombre = nombre;
    this.ocupacion = ocupacion;
}

// Y armamos un Prototype para este objeto
// anteponiendo su nombre y "prototype"

Personaje.prototype.describirPersonaje = function(){
    return `El personaje es ${this.nombre} y su ocupación es ${this.ocupacion}`;
}

const personaje1 = new Personaje("Dr. Emmet Brown", "Científico");
const personaje2 = new Personaje("Marthy Mc Fly", "Viajero en el tiempo");

// Accedemos a la construcción del objeto
console.log (personaje1);
console.log (personaje2);

// Y acá accedemos a los datos a través del Prototype que creamos

let doc = personaje1.describirPersonaje();
console.log(doc);

let marthy = personaje2.describirPersonaje();
console.log(marthy);
