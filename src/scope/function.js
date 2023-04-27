// La principal característica es la manera de poder acceder al valor que almancena dentro de una función
/**
 * Las variables declaradas van a tener un alcance dentro de la fución que las contiene y en las funciones anidadas que contenga esta función. 
 */

// Ejemplo 1:
function saludar(){
    let _usuarioEnero = 'Martín Díaz Torres';
    console.log(_usuarioEnero);

    if( _usuarioEnero === 'Martín Díaz Torres'){
        console.log(`Hola ${_usuarioEnero}, ¡bienvenido a tu sesión!`);
    }else{
        console.log('No encontramos al usuario que búsca');
    }
}

saludar();


// Ejemplo 2: 
/**
 * En este ejemplo tenemos diferentes accesos a las variables
 */

let _usuarioMarzo ='Ana Carrazco';
var _usuarioAbril ='Alex Fernandez';
function inicioSesion(){
   let _usuarioFebrero = 'Matias Ramirez';
    console.log(`Este es el usuario: ${_usuarioFebrero}`);
    console.log(`Este es el usuario: ${_usuarioAbril}`);
    console.log(`Este es el usuario: ${_usuarioMarzo}`);

    if (_usuarioFebrero === 'Matias Ramirez') {
        console.dir(`Hola ${_usuarioFebrero}, ¡Bienvenido a tu espacio de trabajo!, ¿cómo quiere empezar el día?`);
    }else{
        console.log('Usuario no registrado, ¿quieres crear una cuenta?'); 
    }
}

inicioSesion();
console.log(_usuarioMarzo);
console.log(_usuarioAbril);
console.log(_usuarioFebrero);