// block scope
/**
 * en ES6, se introducen las palabras reservadas let y const, las cuales forman parte del concepto block scope,
 * El block scope tiene una estructura de corchetes, es la delimitación del bloque:  { },
 * 
 * 
 */

function frutas(){

    if(true){
        var frutaVerano = 'naranja'; // function scope
        let frutaOtoño = 'jícama'; // block scope
        const frutaInvierno = 'mandarina'; // block scope
    }
    console.log(frutaVerano);
    console.log(frutaOtoño);
    console.log(frutaInvierno);
}

frutas();


// Ejemplo 2:
function verduras() {
    
    if (true){
    var verduraHuerto = 'zanahoria';
    let verduraHortaliza = 'rábano';
    const verduraGranja = 'Calabaza';
    console.log(verduraHortaliza); // let
    console.log(verduraGranja); // const
    }
    console.log(verduraHuerto);
}

verduras();