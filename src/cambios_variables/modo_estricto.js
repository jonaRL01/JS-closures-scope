// TEMA:  MODO ESTRICTO
/**
 * * El modo estricto es una una funcinoalidad que ke permite a JS cambiar la manera en que ejecuta el código.
 * * con esto se reducen las acciones que se pueden hacer en cuanto al maneo de los errores
 */

nombre = "Dante";
console.log(nombre);

// * como podemos ver, el implemento del modo estricto se estable que todas las variables tienen que se inicializadas pra evitar errores en el código.

"use strict";

apellido = "Hernández";
console.log(apellido);

// * uso del modo estricto dentro de una función

function numeroMatemárico() {
    return pi = 3.1416;
}

console.log(numeroMatemárico()); 

// *Usando el modo stricto dentro de una función aplica las mismas reglas
function numeroPi() {
    "use strict"
    return pi = 3.1416;
}

console.log(numeroPi()); 