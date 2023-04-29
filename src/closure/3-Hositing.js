// TEMA: HOSITING

// * El hoisting es la forma en la que el motor de JS permite el acceso de las variables cuando son llamadas, hacemos alució a una elevación

var nombreMascota;          // undefined
console.log(nombreMascota);
var nombreMascota = "Zeus";
console.log(nombreMascota);


// ? hoistin de una función

mascota();

function mascota(){
    console.log(`el emjor perro es mi ${perrofavorito}`);
}

let perrofavorito;
// let perrofavorito = "chiquilín";

