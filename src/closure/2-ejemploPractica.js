// TEMA: ejemplo práctico del empleo de CLOSURES
// * Nuestro objetivo es crear un programa que nos permita guardar el dinero que vamos ingresando a una alcancía empleando el concepto de closure:

// ESTRATEGIA: Crear una función que retorne la cantidad de dinero que ingresamos a la alcancía: 

function saldoAhorro() {        // * Esta función es la que se invoca cuando queremos saber nuestro ahorro
    let dineroGuardado = 0;     // ? inicializamos la variable
    //anidamos la función que nos perite trabajar con la variable dineroGuardado;
    function monto(dinero) {
        dineroGuardado += dinero; // * con esta operación hacemos la adición de los dineros guardados
        console.log(` Este es el monto guardado $${dineroGuardado}`);
    }
    return monto;
}

const _usuario231001 = saldoAhorro(4000);
_usuario231001(102);
_usuario231001(201);
_usuario231001(302);

