
// TEMA: reasignación / re declaración
// * capacidades que son permitidas en la palabra reservada VAR:

var nombre;
nombre = 'Dante';
console.log(nombre);

var RFC = "DJRUF268";            // declaración / asignación
RFC = "FDJUL205";                //reasignar
console.log(RFC);
console.log({ RFC });

var CURP = "ERDO985412HYBHU25";  // declaración / asignación
CURP= "DFUFDASJFOI25";           // reasignación
console.log(CURP);
console.log({ CURP} );


// * capacidades que son permitidas en la palabra reservada LET:

let pi = 3.141516;   // declaración / asignación
pi = 9.18;           // reasignación
console.log(pi);
console.log({ pi} );

// ALERTA: Cuando usamos la palabra reservada let, no podemos hacer una redeclaración -> nos arroja un SyntaxError: 
// let pi = "2i";


// * capacidades que son permitidas en la palabra reservada CONST:

const pintor = 'Claude Monet';   // declaración  / asignación
console.log( pintor );
// ALERTA: Cuando empleamos la palabra reservada const no podemos reasignar el valor de la variable y hacer una re declaración de esta variable. 
// pintor = 'Saturnino Herrán';     //reasignando
// const pintor = 'Frida Khalo'; // re declaracndo


// protip: si podemos hacer referencia a esta variable utilizando métodos
const arrayFrutas = [];
arrayFrutas.push('manzana', 'pera', 'durazno');
console.log(arrayFrutas);

arrayFrutas.shift();
console.log(arrayFrutas);
