
// Variables y constantes

    // No usar var, unicamente const y let
    const nombre = 'Alberto';
    const apellido = 'De La Torre';

    let valorDado = 5;
    valorDado = 4;

    console.log( nombre, apellido, valorDado );

    if ( true ) {
        let valorDado = 6; // no es el mismo valorDado que existe fuera (diferente scope)

        console.log( valorDado );
    }

    console.log( valorDado );