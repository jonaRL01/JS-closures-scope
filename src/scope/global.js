// variables

/**
 * La palabra reservada VAR, tenemos los siguientes estados:
 */

var a; // declaración de una variable

var b = 'soy un string'; //declaración & asignación de la variable

 b = 'soy un nuevo string'; //reasignamos el valor de la variable

 var a = 'variable redeclarada'; // redeclaración de la variable

//  GLOBAL SCOPE
/**
 * TODA variable que declaremos en el obejto WINDOW se considera una variable global, a la cual vamos a poder acceder a su valor/referenica en nuestra aplicación.
 */

var mascota = 'perro'; // esta variable se declara en el obejto window, cumple las condiciones para que esta variable sea accesible.

// decalramos una función que haga referencia a la variable mascota:
function lomito(){
    console.log( mascota );
    console.log( { mascota} );
}

lomito();

// Segunda forma en la cual podemos declarar un variable de forma global

function mishi(){
    tuxido = 'gato';
    console.log('variable dentro de la función: ',tuxido);
}

mishi()
console.log('variable fuera de la función: ',tuxido);
console.log({ tuxido });
