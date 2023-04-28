// TEMA: CLOSURE
// * permite acceder al ámbito deuna función exterior desde una función interior. En JS, los closure se crean cada vez que una función es creada. Se tiene un a closure cuando una función cualquiera accede a una variable fuera de su contexto.

const variableGlobal = 0;

function funcionPrincipal() {
    const numero_1 = 1;
    console.log(variableGlobal);

    function funcionPadre() {
        const numero_2 = 2;
        console.log(numero_1, variableGlobal);

        function funcionHijo() {
            console.log(numero_2, numero_1, variableGlobal);
            
        }
        return funcionHijo();    
    }
    return funcionPadre();
}
funcionPrincipal();
