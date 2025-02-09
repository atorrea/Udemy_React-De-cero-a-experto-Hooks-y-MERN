
// Funciones en JS
function saludar( nombre ) { // No crear funciones de esta manera, pueden ser sustituidas por un valor a posteriori
    return `Hola, ${ nombre }`;
}

saludar = 30

console.log( saludar );

const saludar2 = function( nombre ) { // Usar siempre este metodo para crear funciones -> impide reescritura
    return `Hola, ${ nombre }`;
}

console.log( saludar2( 'Mundo' ) );

// Convertir una funcion normal a una funcion lambda (una funcion flecha)
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar3( 'Mundo' ) );

// Cuando solo hay un return dentro de la funcion lambda esta se puede simplificar
const saludar4 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar4( 'Mundo' ) );

// Cuando la funcion no tiene argumentos
const saludar5 = () => `Hola, Mundo`;

console.log( saludar5() );

// En el caso de que una lambda devuelva un objeto
const saludar6 = () => {
    return {
        uid: 'nombreUsuario',
        password: 'claveUsuario'
    }
};

console.log( saludar6() );

// En el caso de que una lambda devuelva un objeto -> para simplificar la funcion es necesario poner parentesis para que se distinga la diferencia entre el cuerpo de la funcion y el objeto
const saludar7 = () => ({
    uid: 'nombreUsuario',
    password: 'claveUsuario'
});

console.log( saludar7() );

const resultadoSaludar = saludar7(); // Otro modo de visualizar el resultado
console.log( resultadoSaludar );

// Tarea
    // 1. Transformar funcion a una funcion flecha
    // 2. Retornar un objeto implicito
    // 3. Probar

    // function getUsuarioActivo( nombre ) {
    //     return {
    //         uid: 'ABC567',
    //         username: nombre
    //     }
    // }

    // const usuarioActivo = getUsuarioActivo( 'Alberto' );
    // console.log( usuarioActivo );

    const getUsuarioActivo = ( nombre ) => ({
            uid: 'ABC567',
            username: nombre
    });

    const usuarioActivo = getUsuarioActivo( 'Alberto' );
    console.log( usuarioActivo );
